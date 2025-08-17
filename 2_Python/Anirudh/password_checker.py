import re

def validate_password(password):
    """
    Validates whether the given password meets the following criteria:
    - Length is between 8 and 20 characters (inclusive).
    - Contains at least one digit.
    - Contains at least one uppercase letter.
    - Contains at least one lowercase letter.
    - Contains at least one special character from the set: !@#$%^&*()-+

    Args:
        password (str): The password string to validate.

    Returns:
        bool: True if the password is valid according to the criteria, False otherwise.
    """
    if len(password) < 8 and len(password) > 20:
        return False
    if not any(char.isdigit() for char in password):
        return False
    if not any(char.isupper() for char in password):
        return False
    if not any(char.islower() for char in password):
        return False
    if not any(char in "!@#$%^&*()-+" for char in password):
        return False
    return True

def validate_password_with_error_messages(password):
    """
    Validates a password against specific security criteria and raises descriptive errors.

    Parameters:
        password (str): The password string to validate.

    Raises:
        ValueError: If the password is less than 8 characters.
        ValueError: If the password exceeds 20 characters.
        ValueError: If the password does not contain at least one digit.
        ValueError: If the password does not contain at least one uppercase letter.
        ValueError: If the password does not contain at least one special character (!@#$%^&*()-+).

    Returns:
        None
    """
    if len(password) < 8:
        raise ValueError("Password must be at least 8 characters long.")
    if len(password) > 20:
        raise ValueError("Password must not exceed 20 characters.")
    if not any(char.isdigit() for char in password):
        raise ValueError("Password must contain at least one digit.")
    if not any(char.isupper() for char in password):
        raise ValueError("Password must contain at least one uppercase letter.")
    if not any(char in "!@#$%^&*()-+" for char in password):
        raise ValueError("Password must contain at least one special character.")
    
def validate_password_with_error_messages_regex(password):
    """
    Validates a password against specific security criteria using regular expressions.

    The password must meet the following requirements:
    - Be at least 8 characters long.
    - Not exceed 20 characters.
    - Contain at least one digit.
    - Contain at least one uppercase letter.
    - Contain at least one lowercase letter.
    - Contain at least one special character from the set: !@#$%^&*()-+

    Raises:
        ValueError: If the password does not meet any of the above criteria, 
                    with a descriptive error message indicating the specific requirement that was not met.

    Args:
        password (str): The password string to validate.
    """
    if len(password) < 8:
        raise ValueError("Password must be at least 8 characters long.")
    if len(password) > 20:
        raise ValueError("Password must not exceed 20 characters.")
    if not re.search(r"\d", password):
        raise ValueError("Password must contain at least one digit.")
    if not re.search(r"[A-Z]", password):
        raise ValueError("Password must contain at least one uppercase letter.")
    if not re.search(r"[a-z]", password):
        raise ValueError("Password must contain at least one lowercase letter.")
    if not re.search(r"[!@#$%^&*()-+]", password):
        raise ValueError("Password must contain at least one special character.")
