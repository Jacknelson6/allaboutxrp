"""Comprehensive test suite for validate_article.py.

Tests cover all reviewer-identified defects plus acceptance file regression.
"""
import unittest
import subprocess
import json
import os
import tempfile
import textwrap

SCRIPT = os.path.join(
    os.path.dirname(__file__), '..', 'scripts', 'validate_article.py'
)


class _Base(unittest.TestCase):
    """Shared helpers for validator tests."""

    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()

    def tearDown(self):
        self.tmp.cleanup()

    def _path(self, name):
        return os.path.join(self.tmp.name, name)

    def write_json(self, name, data):
        p = self._path(name)
        with open(p, 'w', encoding='utf-8') as f:
            json.dump(data, f)
        return p

    def write_file(self, name, text):
        p = self._path(name)
        with open(p, 'w', encoding='utf-8') as f:
            f.write(textwrap.dedent(text))
        return p

    def run_val(self, html_path, manifest_path, baseline_path=None):
        cmd = [
            'python3', SCRIPT,
            '--html', html_path,
            '--manifest', manifest_path,
        ]
        if baseline_path:
            cmd.extend(['--baseline', baseline_path])
        return subprocess.run(cmd, capture_output=True, text=True)

    def parsed(self, result):
        """Parse JSON stdout. Returns (errors, warnings, inventory)."""
        data = json.loads(result.stdout)
        return data['errors'], data['warnings'], data['inventory']

    # ---- Factory helpers ------------------------------------------------

    def valid_manifest(self, **overrides):
        m = {
            "schemaVersion": 1,
            "articleSelector": "article",
            "articleUrl": "https://example.com/post",
            "requiredInternalLinks": ["/about"],
            "brands": [{
                "name": "TestBrand",
                "url": "https://testbrand.com",
                "logoSrc": "/logo.png",
                "screenshotSrc": "/screen.png",
            }],
            "requiredSchemaTypes": [],
        }
        m.update(overrides)
        return m

    def valid_html(self, body_extra="", h1_text="My Title", selector="article"):
        return textwrap.dedent(f"""\
            <html>
            <head>
                <title>Page Title</title>
                <meta name="description" content="A description">
                <link rel="canonical" href="https://example.com/post">
                <script type="application/ld+json">
                {{
                    "@context": "https://schema.org",
                    "@graph": [
                        {{"@type": "BlogPosting"}},
                        {{"@type": "Organization"}}
                    ]
                }}
                </script>
            </head>
            <body>
                <h1>{h1_text}</h1>
                <{selector}>
                    <a href="/about">About</a>
                    <a href="https://testbrand.com">Brand</a>
                    <img src="/logo.png" alt="logo" width="100" height="100">
                    <img src="/screen.png" alt="screenshot" width="800" height="600">
                    <p>Some text here.</p>
                    {body_extra}
                </{selector}>
            </body>
            </html>
        """)


# ==========================================================================
# 1. Core happy-path
# ==========================================================================

class TestHappyPath(_Base):
    """Basic passing validation."""

    def test_pass_clean(self):
        m = self.write_json("m.json", self.valid_manifest())
        h = self.write_file("h.html", self.valid_html())
        res = self.run_val(h, m)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_pass_no_brands(self):
        m = self.write_json("m.json", self.valid_manifest(
            brands=[],
            requiredInternalLinks=["/about"],
        ))
        h = self.write_file("h.html", textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>Text</p>
            </article></body></html>
        """))
        res = self.run_val(h, m)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)


# ==========================================================================
# 2. H1 must be page-wide
# ==========================================================================

class TestH1PageWide(_Base):
    """H1 counted page-wide, not scoped to article selector."""

    def test_h1_outside_article_passes(self):
        """H1 in hero section (outside article) still counts."""
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <section class="hero"><h1>Hero Title</h1></section>
            <article>
                <a href="/about">A</a>
                <a href="https://testbrand.com">B</a>
                <img src="/logo.png" alt="logo" width="100" height="100">
                <img src="/screen.png" alt="screenshot" width="800" height="600">
                <p>Text</p>
            </article></body></html>
        """)
        m = self.write_json("m.json", self.valid_manifest())
        h = self.write_file("h.html", html)
        res = self.run_val(h, m)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_h1_only_inside_article_passes(self):
        m = self.write_json("m.json", self.valid_manifest())
        h = self.write_file("h.html", self.valid_html())
        res = self.run_val(h, m)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_zero_h1_fails(self):
        html = self.valid_html().replace("<h1>My Title</h1>", "")
        m = self.write_json("m.json", self.valid_manifest())
        h = self.write_file("h.html", html)
        res = self.run_val(h, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("H1" in e for e in errs))

    def test_two_h1_fails(self):
        html = self.valid_html().replace(
            "<h1>My Title</h1>",
            "<h1>Title One</h1><h1>Title Two</h1>",
        )
        m = self.write_json("m.json", self.valid_manifest())
        h = self.write_file("h.html", html)
        res = self.run_val(h, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("H1" in e and "2" in e for e in errs))

    def test_h1_in_nav_not_counted(self):
        """H1 inside nav should not count."""
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <nav><h1>Nav Title</h1></nav>
            <article>
                <a href="/about">A</a>
                <a href="https://testbrand.com">B</a>
                <img src="/logo.png" alt="logo" width="100" height="100">
                <img src="/screen.png" alt="screenshot" width="800" height="600">
                <p>Text</p>
            </article></body></html>
        """)
        m = self.write_json("m.json", self.valid_manifest())
        h = self.write_file("h.html", html)
        res = self.run_val(h, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("H1" in e and "0" in e for e in errs))


# ==========================================================================
# 3. Selector validation
# ==========================================================================

class TestSelectorValidation(_Base):
    """Strict selector parsing: tag, .class, #id only."""

    def test_compound_selector_rejects(self):
        m = self.valid_manifest(articleSelector="div p")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)
        self.assertIn("selector", res.stderr.lower())

    def test_bracket_selector_rejects(self):
        m = self.valid_manifest(articleSelector="[data-article]")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)

    def test_double_class_rejects(self):
        m = self.valid_manifest(articleSelector=".foo.bar")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)

    def test_valid_tag(self):
        m = self.valid_manifest(articleSelector="article")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_valid_class(self):
        m = self.valid_manifest(articleSelector=".content")
        mp = self.write_json("m.json", m)
        html = self.valid_html(selector='div class="content"')
        # Fix the closing tag
        html = html.replace("</div class=\"content\">", "</div>")
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_valid_id(self):
        m = self.valid_manifest(articleSelector="#guide")
        mp = self.write_json("m.json", m)
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article id="guide">
                <a href="/about">A</a>
                <a href="https://testbrand.com">B</a>
                <img src="/logo.png" alt="logo" width="100" height="100">
                <img src="/screen.png" alt="screenshot" width="800" height="600">
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_empty_selector_rejects(self):
        m = self.valid_manifest(articleSelector="")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)

    def test_selector_with_child_combinator_rejects(self):
        m = self.valid_manifest(articleSelector="div>p")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)


# ==========================================================================
# 4. Article match count
# ==========================================================================

class TestArticleMatchCount(_Base):
    """Exactly one element must match the article selector."""

    def test_no_match_exit2(self):
        m = self.valid_manifest(articleSelector=".nonexistent")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", textwrap.dedent("""\
            <html><head><title>T</title>
            <meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            </head><body><h1>H</h1><p>text</p></body></html>
        """))
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)
        self.assertIn("No element matched", res.stderr)

    def test_nested_match_counts_as_two(self):
        """Nested elements both matching = count > 1 = exit 2."""
        m = self.valid_manifest(articleSelector=".post")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", textwrap.dedent("""\
            <html><head><title>T</title>
            <meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>H</h1>
            <div class="post"><div class="post">text</div></div>
            </body></html>
        """))
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)
        self.assertIn("matched 2", res.stderr)


# ==========================================================================
# 5. Manifest validation
# ==========================================================================

class TestManifestValidation(_Base):
    """Strict manifest type checking."""

    def test_schema_version_bool_rejects(self):
        m = self.valid_manifest(schemaVersion=True)
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)
        self.assertIn("schemaVersion", res.stderr)

    def test_schema_version_string_rejects(self):
        m = self.valid_manifest(schemaVersion="1")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)

    def test_schema_version_2_rejects(self):
        m = self.valid_manifest(schemaVersion=2)
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)

    def test_required_internal_links_not_list_rejects(self):
        m = self.valid_manifest(requiredInternalLinks="/about")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)

    def test_brands_not_list_rejects(self):
        m = self.valid_manifest(brands="bad")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)

    def test_article_url_not_http_rejects(self):
        m = self.valid_manifest(articleUrl="ftp://example.com/post")
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)
        self.assertIn("http", res.stderr)

    def test_approved_removals_wildcard_rejects(self):
        m = self.valid_manifest(approvedRemovals=["https://example.com/*"])
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)
        self.assertIn("wildcard", res.stderr.lower())

    def test_approved_removals_not_http_rejects(self):
        m = self.valid_manifest(approvedRemovals=["/about"])
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)

    def test_approved_removals_valid(self):
        m = self.valid_manifest(
            approvedRemovals=["https://example.com/about"],
            requiredInternalLinks=[],
        )
        mp = self.write_json("m.json", m)
        html = self.valid_html().replace('<a href="/about">About</a>', '')
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_missing_manifest_file(self):
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, "/tmp/nonexistent_manifest.json")
        self.assertEqual(res.returncode, 2)
        self.assertIn("Input error", res.stderr)

    def test_missing_html_file(self):
        mp = self.write_json("m.json", self.valid_manifest())
        res = self.run_val("/tmp/nonexistent.html", mp)
        self.assertEqual(res.returncode, 2)
        self.assertIn("Input error", res.stderr)

    def test_malformed_manifest_json(self):
        p = self._path("bad.json")
        with open(p, 'w') as f:
            f.write("{bad json")
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, p)
        self.assertEqual(res.returncode, 2)

    def test_input_errors_no_traceback(self):
        """All input errors must exit 2 with clean message, no traceback."""
        m = self.valid_manifest(schemaVersion=True)
        mp = self.write_json("m.json", m)
        hp = self.write_file("h.html", self.valid_html())
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 2)
        self.assertNotIn("Traceback", res.stderr)
        self.assertNotIn("Traceback", res.stdout)


# ==========================================================================
# 6. Em dash scope
# ==========================================================================

class TestEmDash(_Base):
    """Em dash: ignore script/style/template, scan title/H1/img alt."""

    def test_emdash_in_article_body(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(body_extra=f"<p>Text {EM_DASH} more</p>")
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Em dash" in e and "body" in e for e in errs))

    def test_emdash_in_script_ignored(self):
        """Em dash inside <script> in article should not trigger."""
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(
            body_extra=f'<script>var x = "test {EM_DASH} val";</script>'
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        errs, _, _ = self.parsed(res)
        self.assertFalse(
            any("Em dash" in e and "body" in e for e in errs),
            f"Em dash in script should not flag: {errs}",
        )

    def test_emdash_in_style_ignored(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(
            body_extra=f'<style>/* {EM_DASH} */</style>'
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        errs, _, _ = self.parsed(res)
        self.assertFalse(any("Em dash" in e and "body" in e for e in errs))

    def test_emdash_in_title(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace(
            "<title>Page Title</title>",
            f"<title>Page {EM_DASH} Title</title>",
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Em dash" in e and "title" in e.lower() for e in errs))

    def test_emdash_in_h1(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(h1_text=f"Title {EM_DASH} Sub")
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Em dash" in e and "H1" in e for e in errs))

    def test_emdash_in_img_alt(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace(
            'alt="logo"',
            f'alt="logo {EM_DASH} brand"',
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Em dash" in e and "alt" in e.lower() for e in errs))

EM_DASH = chr(8212)


# ==========================================================================
# 7. Image alt and dimensions
# ==========================================================================

class TestImages(_Base):
    """Alt attributes, decorative images, brand asset dims."""

    def test_missing_alt_attribute_error(self):
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <img src="/photo.jpg" width="100" height="100">
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("missing alt attribute" in e.lower() for e in errs))

    def test_empty_decorative_alt_ok(self):
        """Empty alt="" is allowed for decorative images."""
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <img src="/decorative.png" alt="" width="100" height="100">
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_brand_logo_empty_alt_error(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace('alt="logo"', 'alt=""')
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(
            any("Brand logo missing alt" in e for e in errs),
            errs,
        )

    def test_brand_screenshot_empty_alt_error(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace('alt="screenshot"', 'alt=""')
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(
            any("Brand screenshot missing alt" in e for e in errs),
            errs,
        )

    def test_body_image_missing_dimensions_error(self):
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <img src="/photo.jpg" alt="Photo">
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("positive width/height" in e.lower() for e in errs))

    def test_body_image_zero_width_error(self):
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <img src="/photo.jpg" alt="Photo" width="0" height="100">
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("positive width/height" in e.lower() for e in errs))

    def test_brand_logo_positive_dims_required(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace(
            'src="/logo.png" alt="logo" width="100" height="100"',
            'src="/logo.png" alt="logo" width="-1" height="100"',
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(
            any("logo" in e.lower() and ("width" in e.lower() or "height" in e.lower()) for e in errs),
            errs,
        )


# ==========================================================================
# 8. Link counting
# ==========================================================================

class TestLinkCounting(_Base):
    """Only http(s) destination links counted. Exclude mailto/tel/js/fragments."""

    def test_mailto_not_counted(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(
            body_extra='<a href="mailto:test@example.com">Email</a>'
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        _, _, inv = self.parsed(res)
        total = inv['internalLinksCount'] + inv['externalLinksCount']
        self.assertEqual(total, 2)  # /about + testbrand.com

    def test_tel_not_counted(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(body_extra='<a href="tel:+1234567890">Call</a>')
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        _, _, inv = self.parsed(res)
        self.assertNotIn("tel:", str(inv['links']))

    def test_javascript_not_counted(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(body_extra='<a href="javascript:void(0)">Click</a>')
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        _, _, inv = self.parsed(res)
        self.assertNotIn("javascript:", str(inv['links']))

    def test_fragment_not_counted(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(body_extra='<a href="#section">Jump</a>')
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        _, _, inv = self.parsed(res)
        total = inv['internalLinksCount'] + inv['externalLinksCount']
        self.assertEqual(total, 2)

    def test_relative_link_counted(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(body_extra='<a href="/other-page">Other</a>')
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        _, _, inv = self.parsed(res)
        self.assertEqual(inv['internalLinksCount'], 2)  # /about + /other-page


# ==========================================================================
# 9. JSON-LD validation
# ==========================================================================

class TestJsonLD(_Base):
    """JSON-LD parsing edge cases."""

    def test_empty_jsonld_malformed(self):
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json"></script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Malformed JSON-LD" in e for e in errs))

    def test_recursive_graph_ok(self):
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@graph": [
                    {"@type": "BlogPosting",
                     "publisher": {"@type": "Organization"}},
                    {"@type": "BreadcrumbList",
                     "itemListElement": [
                        {"@type": "ListItem"}
                     ]}
                ]
            }
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        errs, _, _ = self.parsed(res)
        self.assertFalse(any("Malformed" in e for e in errs))

    def test_malformed_json_in_ld_script(self):
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">{bad json</script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Malformed JSON-LD" in e for e in errs))


# ==========================================================================
# 10. Schema type requirements
# ==========================================================================

class TestSchemaTypes(_Base):
    """Default: Article/BlogPosting + Organization. Others via requiredSchemaTypes."""

    def test_organization_required_by_default(self):
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting"}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Organization" in e for e in errs))

    def test_person_not_required_by_default(self):
        """Person is not mandated globally. Only via requiredSchemaTypes."""
        m = self.write_json("m.json", self.valid_manifest(
            brands=[],
            requiredSchemaTypes=[],
        ))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_person_required_via_manifest(self):
        m = self.write_json("m.json", self.valid_manifest(
            brands=[],
            requiredSchemaTypes=["Person"],
        ))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Person" in e for e in errs))

    def test_breadcrumblist_via_manifest(self):
        m = self.write_json("m.json", self.valid_manifest(
            brands=[],
            requiredSchemaTypes=["BreadcrumbList"],
        ))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("BreadcrumbList" in e for e in errs))

    def test_article_or_blogposting_required(self):
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"Organization"}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Missing Article or BlogPosting" in e for e in errs))


# ==========================================================================
# 11. Head metadata
# ==========================================================================

class TestHeadMetadata(_Base):
    """Head values required and correctly counted."""

    def test_missing_title(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace("<title>Page Title</title>", "")
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Missing title" in e for e in errs))

    def test_missing_meta_description(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace(
            '<meta name="description" content="A description">', ''
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("meta description" in e.lower() for e in errs))

    def test_empty_meta_description(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace(
            'content="A description"', 'content=""'
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("meta description" in e.lower() for e in errs))

    def test_missing_canonical(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace(
            '<link rel="canonical" href="https://example.com/post">', ''
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("canonical" in e.lower() for e in errs))

    def test_canonical_mismatch(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace(
            'href="https://example.com/post"',
            'href="https://example.com/other"',
        )
        # Fix the first replacement (only canonical, not brand)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Canonical URL mismatch" in e for e in errs))


# ==========================================================================
# 12. Baseline comparison
# ==========================================================================

class TestBaseline(_Base):
    """Baseline diff detection and approved removals."""

    def test_unapproved_link_removal(self):
        m = self.write_json("m.json", self.valid_manifest())
        h1 = self.write_file("h1.html", self.valid_html())
        h2 = self.write_file(
            "h2.html",
            self.valid_html().replace('<a href="/about">About</a>', ''),
        )
        res = self.run_val(h2, m, baseline_path=h1)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Unapproved link removal" in e for e in errs))

    def test_approved_link_removal(self):
        m = self.valid_manifest(
            approvedRemovals=["https://example.com/about"],
            requiredInternalLinks=[],
        )
        mp = self.write_json("m.json", m)
        h1 = self.write_file("h1.html", self.valid_html())
        h2 = self.write_file(
            "h2.html",
            self.valid_html().replace('<a href="/about">About</a>', ''),
        )
        res = self.run_val(h2, mp, baseline_path=h1)
        self.assertEqual(res.returncode, 0, res.stdout + res.stderr)

    def test_exact_raster_removal_approval(self):
        image = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        other = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aR1sAAAAASUVORK5CYII="
        current = self.write_file("current.html", self.valid_html())
        before = self.write_file("before.html", self.valid_html(
            f'<img src="{image}" alt="old" width="1" height="1">'))
        manifest = self.write_json("m.json", self.valid_manifest())
        result = self.run_val(current, manifest, before)
        self.assertEqual(result.returncode, 1)
        self.assertIn(f"Unapproved image removal: {image}", self.parsed(result)[0])
        manifest = self.write_json("m.json", self.valid_manifest(approvedRemovals=[image]))
        result = self.run_val(current, manifest, before)
        self.assertEqual(result.returncode, 0, result.stderr + result.stdout)
        before = self.write_file("before.html", self.valid_html(
            f'<img src="{image}" alt="old" width="1" height="1">'
            f'<img src="{other}" alt="other" width="1" height="1">'))
        result = self.run_val(current, manifest, before)
        self.assertEqual(result.returncode, 1)
        self.assertIn(f"Unapproved image removal: {other}", self.parsed(result)[0])
        self.assertNotIn(f"Unapproved image removal: {image}", self.parsed(result)[0])

    def test_raster_removal_rejects_malformed_and_broad_approvals(self):
        for value in ["data:image/png;base64,", "data:image/png;base64,*",
                      "data:image/png;base64,!!!!", "data:image/png;base64,aGVsbG8=",
                      "data:image/svg+xml;base64,PHN2Zz4=", "data:text/plain;base64,aGVsbG8=",
                      "data:image/png,hello", "file:///logo.png", "data:image/png;base64,iVBORw0KGgo=*"]:
            with self.subTest(value=value):
                manifest = self.write_json("m.json", self.valid_manifest(approvedRemovals=[value]))
                current = self.write_file("current.html", self.valid_html())
                result = self.run_val(current, manifest)
                self.assertEqual(result.returncode, 2, result.stderr + result.stdout)

    def test_wrong_baseline_selector_fails(self):
        """If baseline HTML does not match the selector, must report error."""
        m = self.valid_manifest(articleSelector=".post-main")
        mp = self.write_json("m.json", m)
        # Current HTML has .post-main
        cur = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article class="post-main">
                <a href="/about">A</a>
                <a href="https://testbrand.com">B</a>
                <img src="/logo.png" alt="logo" width="100" height="100">
                <img src="/screen.png" alt="screenshot" width="800" height="600">
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("cur.html", cur)
        # Baseline has no .post-main (uses <article> without class)
        baseline = textwrap.dedent("""\
            <html><head><title>T</title></head><body>
            <h1>Title</h1>
            <article><p>Old content</p></article>
            </body></html>
        """)
        bp = self.write_file("baseline.html", baseline)
        res = self.run_val(hp, mp, baseline_path=bp)
        # Must NOT pass green: selector mismatch on baseline must produce error
        self.assertNotEqual(res.returncode, 0, "Wrong baseline selector should not pass green")
        # Should report the baseline matched 0 elements
        errs, _, _ = self.parsed(res)
        self.assertTrue(
            any("baseline" in e.lower() or "Baseline" in e for e in errs),
            f"Should mention baseline issue: {errs}",
        )


# ==========================================================================
# 13. Video and source capture
# ==========================================================================

class TestVideoCapture(_Base):
    """video/source src and data-src capture."""

    def test_video_source_captured(self):
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <video>
                    <source src="/video.mp4" type="video/mp4">
                </video>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        _, _, inv = self.parsed(res)
        self.assertIn(
            "https://example.com/video.mp4",
            inv['videos'],
        )

    def test_video_data_src_captured(self):
        """Lazy-loaded video source with data-src should be captured."""
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <video>
                    <source data-src="/lazy-video.mp4" type="video/mp4">
                </video>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        _, _, inv = self.parsed(res)
        self.assertIn(
            "https://example.com/lazy-video.mp4",
            inv['videos'],
        )

    def test_video_element_src_captured(self):
        """<video src="..."> should be captured."""
        m = self.write_json("m.json", self.valid_manifest(brands=[]))
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <video src="/direct.mp4"></video>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        _, _, inv = self.parsed(res)
        self.assertIn(
            "https://example.com/direct.mp4",
            inv['videos'],
        )


# ==========================================================================
# 14. Banned filler
# ==========================================================================

class TestBannedFiller(_Base):
    def test_filler_detected(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html(
            body_extra="<p>Not listed on this page</p>"
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Banned filler" in e for e in errs))


# ==========================================================================
# 15. Brand assets
# ==========================================================================

class TestBrandAssets(_Base):
    def test_missing_brand_link(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace(
            '<a href="https://testbrand.com">Brand</a>', ''
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Brand link not found" in e for e in errs))

    def test_missing_brand_logo(self):
        m = self.write_json("m.json", self.valid_manifest())
        html = self.valid_html().replace(
            'src="/logo.png"', 'src="/other.png"'
        )
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, m)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("Brand logo not found" in e for e in errs))


# ==========================================================================
# 16. Output format
# ==========================================================================

class TestOutputFormat(_Base):
    """Output structure matches contract."""

    def test_output_has_expected_keys(self):
        m = self.write_json("m.json", self.valid_manifest())
        h = self.write_file("h.html", self.valid_html())
        res = self.run_val(h, m)
        data = json.loads(res.stdout)
        self.assertIn("errors", data)
        self.assertIn("warnings", data)
        self.assertIn("inventory", data)
        self.assertIsInstance(data["errors"], list)
        self.assertIsInstance(data["warnings"], list)
        self.assertIsInstance(data["inventory"], dict)
        inv = data["inventory"]
        for k in ("links", "images", "videos", "internalLinksCount", "externalLinksCount"):
            self.assertIn(k, inv)

    def test_output_to_file(self):
        m = self.write_json("m.json", self.valid_manifest())
        h = self.write_file("h.html", self.valid_html())
        out = self._path("out.json")
        cmd = [
            'python3', SCRIPT,
            '--html', h, '--manifest', m, '--output', out,
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, res.stderr)
        with open(out) as f:
            data = json.load(f)
        self.assertIn("errors", data)


# ==========================================================================
# 17. Acceptance: cedar-valid.html MUST PASS
# ==========================================================================

ACCEPTANCE_DIR = os.path.join(
    os.path.dirname(__file__), 'fixtures'
)


class TestCedarAcceptance(_Base):
    """cedar-valid.html + cedar-manifest.json must pass with zero errors."""

    def test_cedar_valid_passes(self):
        html_path = os.path.join(ACCEPTANCE_DIR, 'cedar-valid.html')
        manifest_path = os.path.join(ACCEPTANCE_DIR, 'cedar-manifest.json')
        if not os.path.exists(html_path):
            self.fail("Required cedar-valid.html fixture not found")
        res = self.run_val(html_path, manifest_path)
        if res.returncode != 0:
            data = json.loads(res.stdout) if res.stdout.strip() else {}
            self.fail(
                f"cedar-valid.html should pass but got exit {res.returncode}.\n"
                f"Errors: {data.get('errors', [])}\n"
                f"Stderr: {res.stderr}"
            )


# ==========================================================================
# 18. Acceptance: ac-before.html must flag real issues, no false H1
# ==========================================================================

class TestACBeforeAcceptance(_Base):
    """ac-before.html + ac-manifest.json flags real defects."""

    def test_ac_before_flags_errors(self):
        html_path = os.path.join(ACCEPTANCE_DIR, 'ac-before.html')
        manifest_path = os.path.join(ACCEPTANCE_DIR, 'ac-manifest.json')
        if not os.path.exists(html_path):
            self.fail("Required ac-before.html fixture not found")
        res = self.run_val(html_path, manifest_path)
        self.assertEqual(res.returncode, 1, "ac-before should have errors")
        errs, _, _ = self.parsed(res)

        # Must flag missing required assets (logo/screenshot not in article)
        has_asset_err = any(
            "Brand logo not found" in e or "Brand screenshot not found" in e
            for e in errs
        )
        self.assertTrue(has_asset_err, f"Should flag missing brand assets: {errs}")

        # Must flag missing required internal link
        has_link_err = any("Required internal link not found" in e for e in errs)
        self.assertTrue(has_link_err, f"Should flag missing required link: {errs}")

        # Must flag banned filler
        has_filler_err = any("Banned filler" in e for e in errs)
        self.assertTrue(has_filler_err, f"Should flag banned filler: {errs}")

        # Must NOT have false H1 error (page has exactly 1 H1)
        h1_errs = [e for e in errs if "H1" in e]
        self.assertEqual(
            len(h1_errs), 0,
            f"Should NOT flag H1 error (has exactly 1 page-wide H1): {h1_errs}",
        )


# ==========================================================================
# 19. VideoObject validation even without manifest video
# ==========================================================================

class TestVideoObjectValidation(_Base):
    """Validate date/url types in VideoObject, missing iframe even without
    manifest video entry."""

    def test_video_object_bad_upload_date_type(self):
        m = self.valid_manifest(
            brands=[],
            video={"embedUrl": "https://youtube.com/embed/abc"},
        )
        mp = self.write_json("m.json", m)
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            <script type="application/ld+json">
            {"@type":"VideoObject",
             "name":"V","description":"D","thumbnailUrl":"https://t.co/img.jpg",
             "uploadDate": 12345,
             "embedUrl":"https://youtube.com/embed/abc"}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <iframe src="https://youtube.com/embed/abc"></iframe>
                <p>Text</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("uploadDate" in e for e in errs), errs)

    def test_missing_iframe_flagged(self):
        """Even with valid VideoObject, missing iframe should flag."""
        m = self.valid_manifest(
            brands=[],
            video={"embedUrl": "https://youtube.com/embed/abc"},
        )
        mp = self.write_json("m.json", m)
        html = textwrap.dedent("""\
            <html><head>
            <title>T</title><meta name="description" content="D">
            <link rel="canonical" href="https://example.com/post">
            <script type="application/ld+json">
            {"@type":"BlogPosting","publisher":{"@type":"Organization"}}
            </script>
            <script type="application/ld+json">
            {"@type":"VideoObject",
             "name":"V","description":"D","thumbnailUrl":"https://t.co/img.jpg",
             "uploadDate": "2026-01-01",
             "embedUrl":"https://youtube.com/embed/abc"}
            </script>
            </head><body>
            <h1>Title</h1>
            <article>
                <a href="/about">A</a>
                <p>No iframe here</p>
            </article></body></html>
        """)
        hp = self.write_file("h.html", html)
        res = self.run_val(hp, mp)
        self.assertEqual(res.returncode, 1)
        errs, _, _ = self.parsed(res)
        self.assertTrue(any("iframe" in e.lower() for e in errs), errs)


if __name__ == '__main__':
    unittest.main()
