import unittest
from lib.shouter import shout

class ShouterTest(unittest.TestCase):

    def test_it_should_shout(self):
        self.assertEqual("Hello!", shout("Hello"))
