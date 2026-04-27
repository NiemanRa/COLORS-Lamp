const add = require('./code.js')

test('addColor returns active', () => {
  const result = addColor(); // Call with no parameters
  expect(result).toBe('active'); // Assert expectation
});

describe('PHP API Tests', () => {
  it('Data get', async () => {
    const response = await request()
      .get('/api/addColor.php') // Path to your PHP file or route
      .set('Accept', 'application/json');
    expect(response.status).toBe(200); // Check status code
  });
