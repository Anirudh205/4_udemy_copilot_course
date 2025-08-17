import {passwordChecker} from './passwordChecker.js';
import {describe, test} from 'node:test';
import * as assert from 'node:assert';

describe('Password Checker Tests', () => {
    test('should throw an error if password is not a string', () => {
        assert.throws(() => passwordChecker(12345678), Error('Password must be a string'));
    });

    test('should throw an error if password is less than 8 characters', () => {
        assert.throws(() => passwordChecker('short'), Error('Password must be at least 8 characters long'));
    });

    test('should throw an error if password exceeds 20 characters', () => {
        assert.throws(() => passwordChecker('thisisaverylongpassword123'), Error('Password must not exceed 20 characters'));
    });

    test('should throw an error if password does not contain at least one digit', () => {
        assert.throws(() => passwordChecker('NoDigitsHere!'), Error('Password must contain at least one digit'));
    });

    test('should throw an error if password does not contain at least one special character', () => {
        assert.throws(() => passwordChecker('NoSpecial123'), Error('Password must contain at least one special character'));
    });

    test('should throw an error if password does not contain at least one lowercase letter', () => {
        assert.throws(() => passwordChecker('NOLOWERCASE123!'), Error('Password must contain at least one lowercase character'));
    });

    test('should throw an error if password does not contain at least one uppercase letter', () => {
        assert.throws(() => passwordChecker('nouppercase123!'), Error('Password must contain at least one uppercase character'));
    });

    test('should pass for a valid password', () => {
        assert.doesNotThrow(() => passwordChecker('Valid1Password?'));
    });
});
