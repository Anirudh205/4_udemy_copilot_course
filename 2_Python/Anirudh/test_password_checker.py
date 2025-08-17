import unittest
from password_checker import *

class TestValidatePassword(unittest.TestCase):
    def test_valid_password(self):
        self.assertTrue(validate_password("Valid1!pass"))
        self.assertTrue(validate_password("A1b2c3d4!"))
        self.assertTrue(validate_password("GoodPass1@"))

    def test_too_short(self):
        self.assertFalse(validate_password("abc!"))  # too short

    def test_too_long(self):
        self.assertFalse(validate_password("1234567890123456789012345"))  # 25 chars

    def test_no_digit(self):
        self.assertFalse(validate_password("NoDigits!A"))

    def test_no_uppercase(self):
        self.assertFalse(validate_password("nouppercase1!"))

    def test_no_lowercase(self):
        self.assertFalse(validate_password("NOLOWERCASE1!"))

    def test_no_special_char(self):
        self.assertFalse(validate_password("NoSpecial1A"))

class TestValidatePasswordWithErrorMessages(unittest.TestCase):
    def test_valid_password(self):
        try:
            validate_password_with_error_messages("Valid1!pass")
        except ValueError:
            self.fail("validate_password_with_error_messages() raised ValueError unexpectedly!")

    def test_too_short(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages("A1b!")
        self.assertIn("at least 8 characters", str(cm.exception))

    def test_too_long(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages("A1b!" + "c"*17 + "D")
        self.assertIn("not exceed 20 characters", str(cm.exception))

    def test_no_digit(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages("NoDigits!A")
        self.assertIn("at least one digit", str(cm.exception))

    def test_no_uppercase(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages("nouppercase1!")
        self.assertIn("at least one uppercase", str(cm.exception))

    def test_no_special_char(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages("NoSpecial1A")
        self.assertIn("at least one special", str(cm.exception))

class TestValidatePasswordWithErrorMessagesRegex(unittest.TestCase):
    def test_valid_password(self):
        try:
            validate_password_with_error_messages_regex("Valid1!pass")
        except ValueError:
            self.fail("validate_password_with_error_messages_regex() raised ValueError unexpectedly!")

    def test_too_short(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages_regex("A1b!")
        self.assertIn("at least 8 characters", str(cm.exception))

    def test_too_long(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages_regex("A1b!" + "c"*17 + "D")
        self.assertIn("not exceed 20 characters", str(cm.exception))

    def test_no_digit(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages_regex("NoDigits!A")
        self.assertIn("at least one digit", str(cm.exception))

    def test_no_uppercase(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages_regex("nouppercase1!")
        self.assertIn("at least one uppercase", str(cm.exception))

    def test_no_lowercase(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages_regex("NOLOWERCASE1!")
        self.assertIn("at least one lowercase", str(cm.exception))

    def test_no_special_char(self):
        with self.assertRaises(ValueError) as cm:
            validate_password_with_error_messages_regex("NoSpecial1A")
        self.assertIn("at least one special", str(cm.exception))

if __name__ == "__main__":
    unittest.main()