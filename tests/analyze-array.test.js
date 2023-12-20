const analyzeArray = require('../scripts/analyze-array');

test('average', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).average).toEqual(3);
});

test('minimum number', () => {
    expect(analyzeArray([15, 33, 2, 5]).min).toBe(2);
});

test('maximum number', () => {
    expect(analyzeArray([15, 33, 2, 5]).max).toBe(33);
});

test('length', () => {
    expect(analyzeArray([4, 6, 23, 2435, 5]).length).toBe(5);
})