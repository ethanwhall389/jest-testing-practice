const capitalize = require("../scripts/capitalize");

test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});