import { add } from './calc';

describe("add", () => {
  test('should return 0 for an empty strings', () => {
    const result = add("");
    expect(result).toBe(0);
  });

  describe('with single digit', () => {
    test('should return 0 for "0"', () => {
      const result = add("0");
      expect(result).toBe(0);
    });
  });
});
