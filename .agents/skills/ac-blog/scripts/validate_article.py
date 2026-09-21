#!/usr/bin/env python3
"""Blog article validator. Offline, stdlib-only, deterministic."""
import sys
import base64
import binascii
import json
import argparse
import datetime
import re
import urllib.parse
from html.parser import HTMLParser

# ---------------------------------------------------------------------------
# Selector regex: tag | .class | #id  (no compound, no spaces, no brackets)
# ---------------------------------------------------------------------------
_SELECTOR_RE = re.compile(
    r'^(?:[a-zA-Z][a-zA-Z0-9]*'          # bare tag name
    r'|\.[a-zA-Z_-][a-zA-Z0-9_-]*'       # .className
    r'|#[a-zA-Z_-][a-zA-Z0-9_-]*)$'      # #idValue
)

# Tags whose text content is invisible to readers
_INVISIBLE_TAGS = frozenset({'script', 'style', 'template'})

EM_DASH = chr(8212)


def _is_http_url(url):
    """True for absolute http or https URLs."""
    return url.startswith('http://') or url.startswith('https://')


def _is_exact_raster_data_uri(value):
    """Validate a complete base64 raster URI; approval still uses exact equality.

    Check canonical base64 and the declared format signature, not image integrity.
    No SVG, extra parameters, whitespace, empty payloads or prefix approvals.
    """
    match = re.fullmatch(r'data:image/(png|jpeg|webp|gif);base64,([A-Za-z0-9+/]+={0,2})', value)
    if not match:
        return False
    try:
        payload = base64.b64decode(match.group(2), validate=True)
    except (ValueError, binascii.Error):
        return False
    if base64.b64encode(payload).decode('ascii') != match.group(2):
        return False
    kind = match.group(1)
    if kind == 'png':
        return len(payload) > 8 and payload.startswith(b'\x89PNG\r\n\x1a\n')
    if kind == 'jpeg':
        return len(payload) > 4 and payload.startswith(b'\xff\xd8\xff') and payload.endswith(b'\xff\xd9')
    if kind == 'gif':
        return len(payload) > 6 and payload[:6] in (b'GIF87a', b'GIF89a') and payload.endswith(b';')
    return len(payload) > 12 and payload.startswith(b'RIFF') and payload[8:12] == b'WEBP'


def _positive_int(val):
    """Return int > 0 or None."""
    try:
        n = int(val)
        return n if n > 0 else None
    except (ValueError, TypeError):
        return None


class BlogHTMLParser(HTMLParser):
    """Single-pass HTML parser collecting structural data for validation."""

    def __init__(self, selector):
        super().__init__(convert_charrefs=True)
        self.selector = selector

        if not _SELECTOR_RE.match(selector):
            raise ValueError(
                f"Unsupported selector: {selector!r}. "
                "Only bare tag, .class, or #id selectors are allowed."
            )

        if selector.startswith('.'):
            self.sel_type = 'class'
            self.sel_val = selector[1:]
        elif selector.startswith('#'):
            self.sel_type = 'id'
            self.sel_val = selector[1:]
        else:
            self.sel_type = 'tag'
            self.sel_val = selector

        self.stack = []

        # State flags derived from stack
        self.in_article = False
        self.in_skip = False      # nav, footer
        self.in_head = False
        self.in_invisible = False  # script, style, template (non-LD)
        self.in_script_ld = False
        self.in_h1 = False

        # How many top-level elements matched the article selector
        self.article_match_count = 0

        # Page-wide H1 (not scoped to article)
        self.h1_count = 0
        self.h1_texts = []        # visible text of each H1
        self._current_h1 = []

        # Head metadata
        self.title_text = ""
        self.meta_description = None
        self.canonical_url = None
        self.og_title = None
        self.og_description = None
        self.og_image = None
        self.twitter_card = None

        # JSON-LD
        self.json_ld_scripts = []
        self._current_script_ld = []

        # Title
        self._current_title = []

        # Article body text (visible, excluding script/style/template)
        self.article_text = []

        # Assets inside article
        self.links = []     # href values of <a> tags
        self.images = []    # dicts with src, alt, width, height, has_alt
        self.iframes = []   # dicts with src
        self.videos = []    # dicts with src (from <video> and <source>)

        self.void_tags = frozenset({
            'area', 'base', 'br', 'col', 'embed', 'hr', 'img',
            'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
        })

    # ---- selector matching ------------------------------------------------

    def _check_selector(self, tag, attrs_dict):
        if self.sel_type == 'tag':
            return tag == self.sel_val
        if self.sel_type == 'id':
            return attrs_dict.get('id') == self.sel_val
        if self.sel_type == 'class':
            classes = attrs_dict.get('class', '').split()
            return self.sel_val in classes
        return False

    # ---- tag handlers -----------------------------------------------------

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)

        match_article = self._check_selector(tag, attrs_dict)
        match_skip = tag in ('nav', 'footer')
        match_head = tag == 'head'
        is_script_ld = (
            tag == 'script'
            and attrs_dict.get('type') == 'application/ld+json'
        )
        match_invisible = tag in _INVISIBLE_TAGS and not is_script_ld

        # Inherit state from parent
        parent = self.stack[-1] if self.stack else {}
        cur_article = parent.get('in_article', False) or match_article
        cur_skip = parent.get('in_skip', False) or match_skip
        cur_head = parent.get('in_head', False) or match_head
        cur_invisible = parent.get('in_invisible', False) or match_invisible

        is_void = tag in self.void_tags

        if not is_void:
            frame = {
                'tag': tag,
                'in_article': cur_article,
                'in_skip': cur_skip,
                'in_head': cur_head,
                'in_invisible': cur_invisible,
                'in_script_ld': is_script_ld,
                'is_article_root': match_article,
            }
            self.stack.append(frame)
            self._sync_state()

        # Track article-selector matches (top-level only)
        if match_article:
            self.article_match_count += 1

        # Page-wide H1 (excluding nav/footer)
        if tag == 'h1' and not cur_skip:
            self.h1_count += 1
            if not is_void:
                self.in_h1 = True
                self._current_h1 = []

        # Head metadata (void tags collected here)
        if tag == 'meta':
            name = attrs_dict.get('name', '').lower()
            prop = attrs_dict.get('property', '').lower()
            content = attrs_dict.get('content', '')
            if name == 'description':
                self.meta_description = content
            if prop == 'og:title':
                self.og_title = content
            if prop == 'og:description':
                self.og_description = content
            if prop == 'og:image':
                self.og_image = content
            if name == 'twitter:card' or prop == 'twitter:card':
                self.twitter_card = content

        if tag == 'link' and attrs_dict.get('rel') == 'canonical':
            self.canonical_url = attrs_dict.get('href')

        # Article-scoped assets
        if cur_article and not cur_skip:
            if tag == 'a' and 'href' in attrs_dict:
                href = attrs_dict['href'].strip()
                self.links.append(href)
            elif tag == 'img':
                has_alt = any(k == 'alt' for k, _ in attrs)
                self.images.append({
                    'src': attrs_dict.get('src', ''),
                    'alt': attrs_dict.get('alt', ''),
                    'width': attrs_dict.get('width', ''),
                    'height': attrs_dict.get('height', ''),
                    'has_alt': has_alt,
                })
            elif tag == 'iframe':
                self.iframes.append({
                    'src': attrs_dict.get('src', ''),
                })
            elif tag == 'video':
                src = attrs_dict.get('src', '')
                if src:
                    self.videos.append({'src': src})
            elif tag == 'source':
                # Accept both src and data-src for lazy-loaded sources
                src = attrs_dict.get('src', '') or attrs_dict.get('data-src', '')
                if src:
                    self.videos.append({'src': src})

    def handle_endtag(self, tag):
        # Find matching open tag (walk backwards)
        idx = -1
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i]['tag'] == tag:
                idx = i
                break
        if idx == -1:
            return

        popped = self.stack[idx]

        # Collect JSON-LD text (including empty scripts)
        if tag == 'script' and popped['in_script_ld']:
            self.json_ld_scripts.append("".join(self._current_script_ld))
            self._current_script_ld = []

        # Collect title text
        if tag == 'title':
            t = "".join(self._current_title).strip()
            if t:
                self.title_text = t
            self._current_title = []

        # Collect H1 text
        if tag == 'h1':
            t = "".join(self._current_h1).strip()
            if t:
                self.h1_texts.append(t)
            self._current_h1 = []
            self.in_h1 = False

        self.stack = self.stack[:idx]
        self._sync_state()

    def handle_data(self, data):
        if self.in_script_ld:
            self._current_script_ld.append(data)
        elif self.in_h1:
            self._current_h1.append(data)
        elif self.stack and self.stack[-1]['tag'] == 'title':
            self._current_title.append(data)
        elif self.in_article and not self.in_skip and not self.in_invisible:
            self.article_text.append(data)

    def _sync_state(self):
        if self.stack:
            top = self.stack[-1]
            self.in_article = top['in_article']
            self.in_skip = top['in_skip']
            self.in_head = top['in_head']
            self.in_invisible = top['in_invisible']
            self.in_script_ld = top['in_script_ld']
        else:
            self.in_article = False
            self.in_skip = False
            self.in_head = False
            self.in_invisible = False
            self.in_script_ld = False


# ---------------------------------------------------------------------------
# Manifest validation helpers
# ---------------------------------------------------------------------------

def _validate_manifest(manifest):
    """Validate manifest structure and types. Returns list of error messages."""
    issues = []

    if not isinstance(manifest, dict):
        issues.append("Manifest must be a JSON object")
        return issues

    # schemaVersion must be integer 1 (not bool, not string)
    sv = manifest.get('schemaVersion')
    if not isinstance(sv, int) or isinstance(sv, bool) or sv != 1:
        issues.append(
            "schemaVersion must be integer 1"
        )
        return issues  # fatal

    required_keys = [
        'articleSelector', 'articleUrl',
        'requiredInternalLinks', 'brands', 'requiredSchemaTypes',
    ]
    for k in required_keys:
        if k not in manifest:
            issues.append(f"Missing required key: {k}")

    if issues:
        return issues

    # Type checks
    if not isinstance(manifest['articleSelector'], str):
        issues.append("articleSelector must be a string")
    if not isinstance(manifest['articleUrl'], str):
        issues.append("articleUrl must be a string")
    elif not _is_http_url(manifest['articleUrl']):
        issues.append("articleUrl must be an http or https URL")
    if not isinstance(manifest['requiredInternalLinks'], list):
        issues.append("requiredInternalLinks must be a list")
    else:
        for i, v in enumerate(manifest['requiredInternalLinks']):
            if not isinstance(v, str):
                issues.append(f"requiredInternalLinks[{i}] must be a string")
    if not isinstance(manifest['requiredSchemaTypes'], list):
        issues.append("requiredSchemaTypes must be a list")
    else:
        for i, v in enumerate(manifest['requiredSchemaTypes']):
            if not isinstance(v, str):
                issues.append(f"requiredSchemaTypes[{i}] must be a string")
    if not isinstance(manifest['brands'], list):
        issues.append("brands must be a list")
    else:
        for i, brand in enumerate(manifest['brands']):
            if not isinstance(brand, dict):
                issues.append(f"brands[{i}] must be an object")
                continue
            for k in ('name', 'url', 'logoSrc', 'screenshotSrc'):
                if k not in brand:
                    issues.append(f"brands[{i}] missing required field: {k}")
                elif not isinstance(brand[k], str) or not brand[k].strip():
                    issues.append(f"brands[{i}].{k} must be a nonempty string")
            if isinstance(brand.get('url'), str) and not _is_http_url(brand['url']):
                issues.append(f"brands[{i}].url must be an http(s) URL")

    # approvedRemovals (optional)
    if 'approvedRemovals' in manifest:
        ar = manifest['approvedRemovals']
        if not isinstance(ar, list):
            issues.append("approvedRemovals must be a list")
        else:
            for i, v in enumerate(ar):
                if not isinstance(v, str):
                    issues.append(f"approvedRemovals[{i}] must be a string")
                elif not (_is_http_url(v) or _is_exact_raster_data_uri(v)):
                    issues.append(
                        f"approvedRemovals[{i}] must be a specific http(s) URL or exact base64 raster image data URI"
                    )
                elif '*' in v:
                    issues.append(
                        f"approvedRemovals[{i}] must not contain wildcards"
                    )

    # video (optional)
    if 'video' in manifest:
        vid = manifest['video']
        if not isinstance(vid, dict):
            issues.append("video must be an object")
        elif 'embedUrl' not in vid:
            issues.append("video missing required field: embedUrl")
        elif not isinstance(vid['embedUrl'], str) or not _is_http_url(vid['embedUrl']):
            issues.append("video.embedUrl must be an http(s) URL")

    return issues


# ---------------------------------------------------------------------------
# Link classification
# ---------------------------------------------------------------------------

def _is_countable_link(href, base_url):
    """True if the link should be counted (http(s) destination, not
    mailto/tel/javascript/same-page fragment)."""
    href = href.strip()
    if not href:
        return False
    # Exclude non-http schemes
    lower = href.lower()
    if lower.startswith(('mailto:', 'tel:', 'javascript:')):
        return False
    # Exclude pure fragment links (same-page anchors)
    if href.startswith('#'):
        return False
    # Resolve relative to absolute
    full = urllib.parse.urljoin(base_url, href)
    return _is_http_url(full)


# ---------------------------------------------------------------------------
# JSON-LD helpers
# ---------------------------------------------------------------------------

def _extract_schema_types(json_ld_scripts):
    """Parse JSON-LD blocks, extract @type values recursively (including
    @graph). Returns (found_types set, video_objects list, parse_errors list)."""
    found_types = set()
    video_objects = []
    parse_errors = []

    for script_text in json_ld_scripts:
        text = script_text.strip()
        if not text:
            parse_errors.append("Malformed JSON-LD (empty)")
            continue
        try:
            data = json.loads(text)
        except (json.JSONDecodeError, ValueError):
            parse_errors.append("Malformed JSON-LD")
            continue

        def _walk(node):
            if isinstance(node, dict):
                t = node.get('@type')
                if t:
                    if isinstance(t, list) and all(isinstance(x, str) for x in t):
                        found_types.update(t)
                        if 'VideoObject' in t:
                            video_objects.append(node)
                    elif isinstance(t, str):
                        found_types.add(t)
                        if t == 'VideoObject':
                            video_objects.append(node)
                    else:
                        parse_errors.append("Malformed JSON-LD @type")
                for v in node.values():
                    _walk(v)
            elif isinstance(node, list):
                for item in node:
                    _walk(item)
        _walk(data)

    return found_types, video_objects, parse_errors


# ---------------------------------------------------------------------------
# Main validation
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Validate a blog article HTML against a manifest."
    )
    parser.add_argument('--html', required=True)
    parser.add_argument('--manifest', required=True)
    parser.add_argument('--baseline', required=False)
    parser.add_argument('--output', required=False)
    args = parser.parse_args()

    # -- Read & validate manifest ------------------------------------------
    try:
        with open(args.manifest, 'r', encoding='utf-8') as f:
            manifest = json.load(f)
    except Exception as e:
        print(f"Input error: manifest read/parse failed: {e}", file=sys.stderr)
        sys.exit(2)

    manifest_issues = _validate_manifest(manifest)
    if manifest_issues:
        for issue in manifest_issues:
            print(f"Input error: {issue}", file=sys.stderr)
        sys.exit(2)

    # Validate selector syntax early
    selector = manifest['articleSelector']
    if not _SELECTOR_RE.match(selector):
        print(
            f"Input error: Unsupported selector: {selector!r}. "
            "Only bare tag, .class, or #id selectors are allowed.",
            file=sys.stderr,
        )
        sys.exit(2)

    # -- Read & parse HTML -------------------------------------------------
    try:
        with open(args.html, 'r', encoding='utf-8') as f:
            html_content = f.read()
    except Exception as e:
        print(f"Input error: html read failed: {e}", file=sys.stderr)
        sys.exit(2)

    try:
        html_parser = BlogHTMLParser(selector)
        html_parser.feed(html_content)
    except ValueError as e:
        print(f"Input error: {e}", file=sys.stderr)
        sys.exit(2)
    except Exception as e:
        print(f"Input error: HTML parsing failed: {e}", file=sys.stderr)
        sys.exit(2)

    # Must match exactly one article element
    if html_parser.article_match_count == 0:
        print(
            f"Input error: No element matched selector {selector!r}",
            file=sys.stderr,
        )
        sys.exit(2)
    if html_parser.article_match_count > 1:
        print(
            f"Input error: Selector {selector!r} matched "
            f"{html_parser.article_match_count} elements, expected 1",
            file=sys.stderr,
        )
        sys.exit(2)

    errors = []
    warnings = []

    base_url = manifest['articleUrl']
    base_netloc = urllib.parse.urlparse(base_url).netloc

    # -- Em dash checks ----------------------------------------------------
    # Article body text (already excludes script/style/template)
    article_text = "".join(html_parser.article_text)
    if EM_DASH in article_text:
        errors.append("Em dash found in article body")

    # Title text
    if EM_DASH in html_parser.title_text:
        errors.append("Em dash found in title")

    # H1 texts
    for h1t in html_parser.h1_texts:
        if EM_DASH in h1t:
            errors.append("Em dash found in H1")
            break

    # Image alt text
    for img in html_parser.images:
        if EM_DASH in img.get('alt', ''):
            errors.append("Em dash found in image alt text")
            break

    # -- Banned filler text ------------------------------------------------
    for filler in ["Not listed on this page", "credentials call SaaS"]:
        if filler in article_text:
            errors.append(f"Banned filler found: {filler}")

    # -- Links (only http(s) destinations) ---------------------------------
    normalized_links = []
    internal_links_count = 0
    external_links_count = 0

    for href in html_parser.links:
        if not _is_countable_link(href, base_url):
            continue
        full_url = urllib.parse.urljoin(base_url, href)
        normalized_links.append(full_url)
        if urllib.parse.urlparse(full_url).netloc == base_netloc:
            internal_links_count += 1
        else:
            external_links_count += 1

    norm_link_set = set(normalized_links)

    # -- Images ------------------------------------------------------------
    normalized_images = []
    for img in html_parser.images:
        src = urllib.parse.urljoin(base_url, img['src']) if img['src'] else ''
        img['norm_src'] = src
        if src:
            normalized_images.append(src)

        # Missing alt attribute (not the same as empty alt)
        if not img['has_alt']:
            errors.append(
                f"Image missing alt attribute: {img['src'] or '(no src)'}"
            )
        # All body images must have positive dimensions
        w = _positive_int(img['width'])
        h = _positive_int(img['height'])
        if w is None or h is None:
            errors.append(
                f"Image missing positive width/height: "
                f"{img['src'] or '(no src)'}"
            )

    # -- Brand assets ------------------------------------------------------
    for brand in manifest['brands']:
        brand_url = urllib.parse.urljoin(base_url, brand['url'])
        if brand_url not in norm_link_set:
            errors.append(f"Brand link not found: {brand['url']}")

        logo_norm = urllib.parse.urljoin(base_url, brand['logoSrc'])
        screen_norm = urllib.parse.urljoin(base_url, brand['screenshotSrc'])

        found_logo = False
        found_screenshot = False
        for img in html_parser.images:
            ns = img.get('norm_src', '')
            if ns == logo_norm:
                found_logo = True
                if not img['alt'].strip():
                    errors.append(
                        f"Brand logo missing alt text: {brand['logoSrc']}"
                    )
                w = _positive_int(img['width'])
                h = _positive_int(img['height'])
                if w is None or h is None:
                    errors.append(
                        f"Brand logo invalid width/height: {brand['logoSrc']}"
                    )
            if ns == screen_norm:
                found_screenshot = True
                if not img['alt'].strip():
                    errors.append(
                        f"Brand screenshot missing alt text: "
                        f"{brand['screenshotSrc']}"
                    )
                w = _positive_int(img['width'])
                h = _positive_int(img['height'])
                if w is None or h is None:
                    errors.append(
                        f"Brand screenshot invalid width/height: "
                        f"{brand['screenshotSrc']}"
                    )

        if not found_logo:
            errors.append(f"Brand logo not found: {brand['logoSrc']}")
        if not found_screenshot:
            errors.append(
                f"Brand screenshot not found: {brand['screenshotSrc']}"
            )

    # -- Required internal links -------------------------------------------
    for req_link in manifest['requiredInternalLinks']:
        if urllib.parse.urljoin(base_url, req_link) not in norm_link_set:
            errors.append(f"Required internal link not found: {req_link}")

    # -- JSON-LD / schema types --------------------------------------------
    found_types, video_objects, ld_errors = _extract_schema_types(
        html_parser.json_ld_scripts
    )
    errors.extend(ld_errors)

    # Default required: Article or BlogPosting, Organization
    if 'Article' not in found_types and 'BlogPosting' not in found_types:
        errors.append("Missing Article or BlogPosting in JSON-LD")

    if 'Organization' not in found_types:
        errors.append("Missing required schema type: Organization")

    # Additional types from manifest requiredSchemaTypes
    for req_type in manifest['requiredSchemaTypes']:
        if req_type not in found_types:
            errors.append(f"Missing required schema type: {req_type}")

    # -- H1 (page-wide) ---------------------------------------------------
    if html_parser.h1_count != 1:
        errors.append(
            f"Expected exactly 1 H1, found {html_parser.h1_count}"
        )

    # -- Head metadata -----------------------------------------------------
    if not html_parser.title_text:
        errors.append("Missing title")

    if html_parser.meta_description is None:
        errors.append("Missing meta description")
    elif not html_parser.meta_description.strip():
        errors.append("Empty meta description")

    if html_parser.canonical_url is None:
        errors.append("Missing canonical URL")
    elif html_parser.canonical_url != base_url:
        errors.append(
            f"Canonical URL mismatch: "
            f"{html_parser.canonical_url} != {base_url}"
        )

    # -- Videos (iframes + video/source) -----------------------------------
    normalized_videos = []
    for iframe in html_parser.iframes:
        src = urllib.parse.urljoin(base_url, iframe['src']) if iframe['src'] else ''
        iframe['norm_src'] = src
        if src:
            normalized_videos.append(src)

    for vid in html_parser.videos:
        src = urllib.parse.urljoin(base_url, vid['src']) if vid['src'] else ''
        vid['norm_src'] = src
        if src:
            normalized_videos.append(src)

    if 'video' in manifest:
        if not video_objects:
            errors.append("VideoObject missing from JSON-LD but video in manifest")
        else:
            embed_url = urllib.parse.urljoin(
                base_url, manifest['video']['embedUrl']
            )
            found_vid = False
            for v_obj in video_objects:
                v_embed = v_obj.get('embedUrl')
                if not isinstance(v_embed, str) or not _is_http_url(v_embed):
                    errors.append("VideoObject embedUrl must be an http(s) URL")
                    continue
                if urllib.parse.urljoin(base_url, v_embed) == embed_url:
                    found_vid = True
                    # Validate required VideoObject fields
                    missing_fields = []
                    for field in ('name', 'description', 'thumbnailUrl'):
                        val = v_obj.get(field)
                        if not val or not isinstance(val, str):
                            missing_fields.append(field)
                    upload_date = v_obj.get('uploadDate')
                    if not upload_date or not isinstance(upload_date, str):
                        missing_fields.append('uploadDate')
                    if isinstance(upload_date, str):
                        try:
                            datetime.datetime.fromisoformat(upload_date.replace('Z', '+00:00'))
                        except ValueError:
                            missing_fields.append('uploadDate (invalid date)')
                    thumb = v_obj.get('thumbnailUrl')
                    if isinstance(thumb, str) and not _is_http_url(thumb):
                        missing_fields.append('thumbnailUrl (invalid URL)')
                    content_url = v_obj.get('contentUrl')
                    if content_url is not None and not isinstance(content_url, str):
                        missing_fields.append('contentUrl (invalid type)')
                    if missing_fields:
                        errors.append(
                            f"VideoObject missing key fields: "
                            f"{', '.join(missing_fields)}"
                        )
            if not found_vid:
                errors.append(
                    "VideoObject with matching embedUrl not found"
                )

            if embed_url not in normalized_videos:
                errors.append(
                    "Video iframe with matching embedUrl not found in body"
                )
    else:
        if video_objects:
            warnings.append("VideoObject present but no video in manifest")

    # -- Baseline comparison -----------------------------------------------
    if args.baseline:
        try:
            with open(args.baseline, 'r', encoding='utf-8') as f:
                baseline_content = f.read()
            b_parser = BlogHTMLParser(selector)
            b_parser.feed(baseline_content)

            if b_parser.article_match_count != 1:
                errors.append(
                    f"Baseline: selector {selector!r} matched "
                    f"{b_parser.article_match_count} elements, expected 1"
                )
            else:
                b_links = set()
                for href in b_parser.links:
                    if _is_countable_link(href, base_url):
                        b_links.add(urllib.parse.urljoin(base_url, href))

                b_images = set()
                for img in b_parser.images:
                    if img['src']:
                        b_images.add(
                            urllib.parse.urljoin(base_url, img['src'])
                        )

                b_videos = set()
                for iframe in b_parser.iframes:
                    if iframe['src']:
                        b_videos.add(
                            urllib.parse.urljoin(base_url, iframe['src'])
                        )
                for vid in b_parser.videos:
                    if vid['src']:
                        b_videos.add(
                            urllib.parse.urljoin(base_url, vid['src'])
                        )

                approved = set(manifest.get('approvedRemovals', []))

                cur_link_set = set(normalized_links)
                cur_img_set = set(normalized_images)
                cur_vid_set = set(normalized_videos)

                for bl in b_links:
                    if bl not in cur_link_set and bl not in approved:
                        errors.append(f"Unapproved link removal: {bl}")
                for bi in b_images:
                    if bi not in cur_img_set and bi not in approved:
                        errors.append(f"Unapproved image removal: {bi}")
                for bv in b_videos:
                    if bv not in cur_vid_set and bv not in approved:
                        errors.append(f"Unapproved video removal: {bv}")

        except ValueError as e:
            # Selector validation error on baseline
            print(f"Input error: Baseline: {e}", file=sys.stderr)
            sys.exit(2)
        except FileNotFoundError as e:
            print(f"Input error: Baseline file not found: {e}", file=sys.stderr)
            sys.exit(2)
        except Exception as e:
            errors.append(f"Baseline comparison failed: {e}")

    # -- Build output ------------------------------------------------------
    inventory = {
        "links": sorted(set(normalized_links)),
        "images": sorted(set(normalized_images)),
        "videos": sorted(set(normalized_videos)),
        "internalLinksCount": internal_links_count,
        "externalLinksCount": external_links_count,
    }

    out_data = {
        "errors": errors,
        "warnings": warnings,
        "inventory": inventory,
    }

    if args.output:
        with open(args.output, 'w', encoding='utf-8') as f:
            json.dump(out_data, f, indent=2)
    else:
        print(json.dumps(out_data, indent=2))

    if errors:
        sys.exit(1)
    sys.exit(0)


if __name__ == '__main__':
    main()
