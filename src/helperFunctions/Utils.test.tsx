import { capitalizeFirstLetter } from "./capitalize";
import { formatDate, formatDate2 } from "./formatDate";
import { formatNumber } from "./formatNumber";

describe('test utility functions', () => {
    test('capitalizeFirstLetter capitalizes the first letter of a string', () => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
        expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
    });

    test('capitalizeFirstLetter handles empty strings', () => {
        expect(capitalizeFirstLetter('')).toBe('');
    });

    test('formatDate formats the date in the format YYYY-MM-DD correctly', () => {
        expect(formatDate('2022-03-02')).toBe('Mar 02, 2022');
    });
    test('formatDate2 converts date in the Date strong format to `day month year`', () => {
        expect(formatDate2('Wed Nov 29 2023 00:00:00 GMT+0100 (West Africa Standard Time)')).toBe('29 Nov 2023');
    });

    test('formatNumber formats numbers correctly', () => {
        expect(formatNumber(1234.567)).toBe('1,234.57');
    });
});