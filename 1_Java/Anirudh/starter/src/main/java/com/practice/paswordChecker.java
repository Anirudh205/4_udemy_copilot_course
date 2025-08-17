package com.practice;

public class paswordChecker {

    /**
     * Checks if the provided password is valid based on the following criteria:
     * <ul>
     *   <li>Password length must be between 8 and 20 characters (inclusive).</li>
     *   <li>Must contain at least one lowercase letter.</li>
     *   <li>Must contain at least one uppercase letter.</li>
     *   <li>Must contain at least one digit.</li>
     *   <li>Must contain at least one special character from the set: !@#$%^&*()-+</li>
     * </ul>
     *
     * @param password the password string to validate
     * @return {@code true} if the password meets all criteria, {@code false} otherwise
     */
    public boolean isValidPassword(String password) {
        if (password.length() < 8 || password.length() > 20) {
            return false; // Password must be at least 8 characters
        }
        if(!password.matches(".*[a-z].*")) {
            return false; // Password must contain at least one lowercase letter
        }
        if(!password.matches(".*[A-Z].*")) {
            return false; // Password must contain at least one uppercase letter
        }
        if(!password.matches(".*[0-9].*")) {
            return false; // Password must contain at least one digit
        }
        if(!password.matches(".*[!@#$%^&*()-+].*")) {
            return false; // Password must contain at least one special character
        }
        return true;
    }

    /**
     * Validates the given password according to the following rules:
     * <ul>
     *   <li>Password must be between 8 and 20 characters in length.</li>
     *   <li>Password must contain at least one lowercase letter.</li>
     *   <li>Password must contain at least one uppercase letter.</li>
     *   <li>Password must contain at least one digit.</li>
     *   <li>Password must contain at least one special character from the set: !@#$%^&*()-+</li>
     * </ul>
     *
     * @param password the password string to validate
     * @throws Exception if the password does not meet any of the above criteria, with a message indicating the reason
     */
    public void isValidPasswordThrowsException(String password) throws Exception {
        if (password.length() < 8 || password.length() > 20) {
            throw new Exception("Invalid password: Password must be between 8 and 20 characters");
        }
        if(!password.matches(".*[a-z].*")) {
            throw new Exception("Invalid password: Password must contain at least one lowercase letter");
        }
        if(!password.matches(".*[A-Z].*")) {
            throw new Exception("Invalid password: Password must contain at least one uppercase letter");
        }
        if(!password.matches(".*[0-9].*")) {
            throw new Exception("Invalid password: Password must contain at least one digit");
        }
        if(!password.matches(".*[!@#$%^&*()-+].*")) {
            throw new Exception("Invalid password: Password must contain at least one special character");
        }
    }
}
