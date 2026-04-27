const add = require('./code.js')

test('addColor returns active', () => {
  const result = addColor(); // Call with no parameters
  expect(result).toBe('active'); // Assert expectation
});
