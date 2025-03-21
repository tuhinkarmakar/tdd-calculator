import { add } from './calc';

test('should return 0 for an empty string', () => {
  const result = add("");
  expect(result).toBe(0);
});
