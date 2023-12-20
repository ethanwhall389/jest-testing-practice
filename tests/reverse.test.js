const reverse = require('../scripts/reverse');

test('reverse', () => {
    expect(reverse('hello')).toBe('olleh');
})