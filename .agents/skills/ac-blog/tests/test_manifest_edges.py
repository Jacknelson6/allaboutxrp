import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('validator_edges', Path(__file__).parents[1] / 'scripts/validate_article.py')
v = importlib.util.module_from_spec(spec)
spec.loader.exec_module(v)

class ManifestEdges(unittest.TestCase):
    def manifest(self):
        return dict(schemaVersion=1, articleSelector='article', articleUrl='https://client.example/post/', requiredInternalLinks=[], brands=[], requiredSchemaTypes=[])

    def test_bad_video_values_are_input_errors(self):
        for bad in [42, [], None, '', 'javascript:alert(1)']:
            with self.subTest(value=bad):
                m = self.manifest(); m['video'] = {'embedUrl': bad}
                self.assertTrue(v._validate_manifest(m))

    def test_empty_brand_fields_rejected(self):
        m = self.manifest(); m['brands'] = [dict(name='', url='https://tool.example/', logoSrc='/logo.svg', screenshotSrc='/screen.webp')]
        self.assertTrue(v._validate_manifest(m))

    def test_non_http_brand_rejected(self):
        m = self.manifest(); m['brands'] = [dict(name='Tool', url='javascript:alert(1)', logoSrc='/logo.svg', screenshotSrc='/screen.webp')]
        self.assertTrue(v._validate_manifest(m))

    def test_invalid_schema_type_reports_without_crashing(self):
        for raw in ['{"@type":{"bad":1}}', '{"@type":[{"bad":1}]}']:
            with self.subTest(raw=raw):
                _, _, errors = v._extract_schema_types([raw])
                self.assertTrue(errors)

if __name__ == '__main__':
    unittest.main()
