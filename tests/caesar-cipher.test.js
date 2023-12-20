const caesarCipher = require('../scripts/caesar-cipher');

test('cipher lowercase shift of 2', () => {
    expect(caesarCipher('hello', 2)).toBe('JGNNQ');
});

test('cipher lowercase wrapping', () => {
    expect(caesarCipher('zebra', 4)).toBe('DIFVE');
});

test('ciper uppercase', () => {
    expect(caesarCipher('CaeSaR', 4)).toBe('GEIWEV');
})