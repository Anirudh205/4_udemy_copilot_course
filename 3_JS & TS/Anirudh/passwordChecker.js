/**
 * Checks if the provided password meets the required security criteria.
 *
 * @param {string} password - The password string to validate.
 * @throws {Error} If the password is not a string.
 * @throws {Error} If the password is less than 8 characters long.
 * @throws {Error} If the password exceeds 20 characters.
 * @throws {Error} If the password does not contain at least one digit.
 * @throws {Error} If the password does not contain at least one special character.
 * @throws {Error} If the password does not contain at least one lowercase letter.
 * @throws {Error} If the password does not contain at least one uppercase letter.
 */
export function passwordChecker(password) {
    if (typeof password !== 'string') {
        throw new Error('Password must be a string');
    }
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }
    if (password.length > 20) {
        throw new Error('Password must not exceed 20 characters');
    }
    if (!/[0-9]/.test(password)) {
        throw new Error('Password must contain at least one digit');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        throw new Error('Password must contain at least one special character');
    }
    if (!/[a-z]/.test(password)) {
        throw new Error('Password must contain at least one lowercase character');
    }
    if (!/[A-Z]/.test(password)) {
        throw new Error('Password must contain at least one uppercase character');
    }
}

/**
 * Checks if a password meets the following criteria without using regular expressions:
 * - Must be a string
 * - Length must be between 8 and 20 characters (inclusive)
 * - Must contain at least one digit
 * - Must contain at least one special character from: !@#$%^&*(),.?":{}|<>
 * - Must contain at least one lowercase letter
 * - Must contain at least one uppercase letter
 *
 * @param {string} password - The password to validate.
 * @throws {Error} If the password does not meet any of the criteria.
 */
export function passwordCheckerWithoutRegex(password) {
    if (typeof password !== 'string') {
        throw new Error('Password must be a string');
    }
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }
    if (password.length > 20) {
        throw new Error('Password must not exceed 20 characters');
    }

    let hasDigit = false;
    let hasSpecial = false;
    let hasLower = false;
    let hasUpper = false;
    const specialChars = '!@#$%^&*(),.?":{}|<>';

    for (let i = 0; i < password.length; i++) {
        const ch = password[i];
        if (ch >= '0' && ch <= '9') hasDigit = true;
        else if (ch >= 'a' && ch <= 'z') hasLower = true;
        else if (ch >= 'A' && ch <= 'Z') hasUpper = true;
        else if (specialChars.includes(ch)) hasSpecial = true;
    }

    if (!hasDigit) {
        throw new Error('Password must contain at least one digit');
    }
    if (!hasSpecial) {
        throw new Error('Password must contain at least one special character');
    }
    if (!hasLower) {
        throw new Error('Password must contain at least one lowercase letter');
    }
    if (!hasUpper) {
        throw new Error('Password must contain at least one uppercase letter');
    }
}