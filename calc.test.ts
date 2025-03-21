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

    test('should return 1 for "1"', () => {
      const result = add("1");
      expect(result).toBe(1);
    });
  });

  describe('with multiple digits', () => {
    test('should return 3 for "1,2"', () => {
      const result = add("1,2");
      expect(result).toBe(3);
    });
  });
});
