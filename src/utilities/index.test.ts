import '@testing-library/jest-dom/extend-expect';

import { extractNumberFromPathname, formatDate } from '.';

describe('extractNumberFromPathname', () => {
    test('should extract a number that follows a specified keyword', () => {
        expect(extractNumberFromPathname('/series/12345/details', 'series')).toBe(12345);
    });

    test('should return null if no number follows the keyword', () => {
        expect(extractNumberFromPathname('/series/details', 'series')).toBeNull();
    });

    test('should return null if the keyword does not exist in the string', () => {
        expect(extractNumberFromPathname('/items/12345/details', 'series')).toBeNull();
    });

    test('should only extract the number immediately following the keyword', () => {
        expect(extractNumberFromPathname('/series/12345/items/67890', 'series')).toBe(12345);
    });

    test('should return null if the path is empty', () => {
        expect(extractNumberFromPathname('', 'series')).toBeNull();
    });

    test('should return null if keyword is followed by non-number', () => {
        expect(extractNumberFromPathname('/series/abc/details', 'series')).toBeNull();
    });
});

describe('formatDate', () => {
    const consoleError = console.error;
    
    beforeEach(() => {
        console.error = jest.fn();
    });

    afterEach(() => {
        console.error = consoleError;
    });

    test('formats valid date strings correctly', () => {
        const date = "2023-01-01T12:00:00.000Z"; // UTC noon on 2023-01-01
        expect(formatDate(date)).toBe("2023-01-01");
    });

    test('handles invalid date strings', () => {
        const invalidDate = "not a date";
        expect(formatDate(invalidDate)).toBe(invalidDate);
        expect(console.error).toHaveBeenCalled();
    });

    test('handles timezone offset correctly', () => {
        const date = "2023-01-01T00:00:00.000Z"; // UTC midnight on 2023-01-01
        expect(formatDate(date)).toBe("2023-01-01");
    });
});