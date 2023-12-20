const analyzeArray = require('../scripts/analyze-array');

test('average', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).average).toEqual(3);
})