package com.practice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class paswordCheckerTest {

    private final paswordChecker checker = new paswordChecker();

    // Tests for isValidPassword

    @Test
    public void testValidPassword() {
        assertTrue(checker.isValidPassword("Abcdef1!"));
        assertTrue(checker.isValidPassword("GoodPass1@"));
        assertTrue(checker.isValidPassword("A1b2c3d4!"));
        assertTrue(checker.isValidPassword("ValidPass123$"));
    }

    @Test
    public void testPasswordTooShort() {
        assertFalse(checker.isValidPassword("A1b!"));
        assertFalse(checker.isValidPassword("Ab1!c"));
    }

    @Test
    public void testPasswordTooLong() {
        assertFalse(checker.isValidPassword("Abcdefghijklmnopqrstu1!")); // 21 chars
    }

    @Test
    public void testMissingLowercase() {
        assertFalse(checker.isValidPassword("ABCDEFG1!"));
    }

    @Test
    public void testMissingUppercase() {
        assertFalse(checker.isValidPassword("abcdefg1!"));
    }

    @Test
    public void testMissingDigit() {
        assertFalse(checker.isValidPassword("Abcdefg!"));
    }

    @Test
    public void testMissingSpecialCharacter() {
        assertFalse(checker.isValidPassword("Abcdefg1"));
    }

    // Tests for isValidPasswordThrowsException

    @Test
    public void testValidPasswordThrowsException() throws Exception {
        checker.isValidPasswordThrowsException("Abcdef1!");
        checker.isValidPasswordThrowsException("GoodPass1@");
    }

    @Test
    public void testThrowsExceptionForShortPassword() {
        Exception ex = assertThrows(Exception.class, () -> checker.isValidPasswordThrowsException("A1b!"));
        assertEquals("Invalid password: Password must be between 8 and 20 characters", ex.getMessage());
    }

    @Test
    public void testThrowsExceptionForLongPassword() {
        Exception ex = assertThrows(Exception.class, () -> checker.isValidPasswordThrowsException("Abcdefghijklmnopqrstu1!"));
        assertEquals("Invalid password: Password must be between 8 and 20 characters", ex.getMessage());
    }

    @Test
    public void testThrowsExceptionForMissingLowercase() {
        Exception ex = assertThrows(Exception.class, () -> checker.isValidPasswordThrowsException("ABCDEFG1!"));
        assertEquals("Invalid password: Password must contain at least one lowercase letter", ex.getMessage());
    }

    @Test
    public void testThrowsExceptionForMissingUppercase() {
        Exception ex = assertThrows(Exception.class, () -> checker.isValidPasswordThrowsException("abcdefg1!"));
        assertEquals("Invalid password: Password must contain at least one uppercase letter", ex.getMessage());
    }

    @Test
    public void testThrowsExceptionForMissingDigit() {
        Exception ex = assertThrows(Exception.class, () -> checker.isValidPasswordThrowsException("Abcdefg!"));
        assertEquals("Invalid password: Password must contain at least one digit", ex.getMessage());
    }

    @Test
    public void testThrowsExceptionForMissingSpecialCharacter() {
        Exception ex = assertThrows(Exception.class, () -> checker.isValidPasswordThrowsException("Abcdefg1"));
        assertEquals("Invalid password: Password must contain at least one special character", ex.getMessage());
    }
}