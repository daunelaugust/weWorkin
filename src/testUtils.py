import unittest
import os
import json
from utils import fileReader, fileWriter 

class TestFileFunctions(unittest.TestCase):

    def setUp(self):
        self.filename = 'test_projects.json'
        with open(self.filename, 'w') as f:
            json.dump({"project1": {"description": "Test project"}}, f, indent=4)

    def tearDown(self):
        os.remove(self.filename)

    def test_fileReader_valid_file(self):
        content = fileReader(self.filename)
        self.assertIsNotNone(content)
        self.assertIsInstance(content, list)
        self.assertEqual(len(content), 1) 

    def test_fileReader_invalid_file(self):
        content = fileReader('nonexistent_file.json')
        self.assertIsNone(content)

    def test_fileWriter_valid_content(self):
        content = '{"project2": {"description": "Another test project"}}'
        fileWriter(self.filename, content)
        with open(self.filename, 'r') as f:
            written_content = f.read()
            self.assertEqual(written_content, content)

    def test_fileWriter_invalid_content(self):
        fileWriter(self.filename, None)
        with open(self.filename, 'r') as f:
            written_content = f.read()
            self.assertEqual(written_content, '')

if __name__ == '__main__':
    unittest.main()
