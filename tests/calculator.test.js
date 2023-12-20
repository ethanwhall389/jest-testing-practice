const calculator = require('../scripts/calculator');

test('calculator add', () => {
    expect(calculator.add(1,2)).toEqual(3);
});

test('calculator subtract', () => {
    expect(calculator.subtract(10,2)).toBe(8);
});

test('calculator divide', () => {
    expect(calculator.divide(10,2)).toBeCloseTo(5);
});

test('calculator multiply', () => {
    expect(calculator.multiply(10,10)).toEqual(100);
});