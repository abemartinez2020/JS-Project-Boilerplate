import myfunction from '../src/index';

test('see if my test file works', () => {
  const result = myfunction();
  expect(result).toBe('my app works!');
});
