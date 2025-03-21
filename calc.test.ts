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

    test('should return 3 for "1,2,3"', () => {
      const result = add("1,2");
      expect(result).toBe(3);
    });

    test('should return 3 for "1,2,3,"', () => {
      const result = add("1,2");
      expect(result).toBe(3);
    });

    test('should return 3 for " 1 , 2 , 3 , "', () => {
      const result = add("1,2");
      expect(result).toBe(3);
    });
  });

  describe('with new line character', () => {
    test('should return 6 for "1\n2,3"', () => {
      const result = add("1\n2,3");
      expect(result).toBe(6);
    });
  });

  describe('with custom delimiter', () => {
    test('should return 3 for "//;\n1;2"', () => {
      const result = add("//;\n1;2");
      expect(result).toBe(3);
    });

    test('should return 3 for "//abc\n1abc2"', () => {
      const result = add("//abc\n1abc2");
      expect(result).toBe(3);
    });

    test('should return 6 for "//abc\n1abc2abc\n3"', () => {
      const result = add("//abc\n1abc2abc\n3");
      expect(result).toBe(6);
    });

    test('should return 6 for "//\n\n1\n2\n3"', () => {
      const result = add("//\n\n1\n2\n3");
      expect(result).toBe(6);
    });
  });

  describe('with negative numbers', () => {
    test('should throw an error for "-1"', () => {
      expect(() => add("-1")).toThrowError("Negative numbers not allowed: -1");
    });

    test('should throw an error for "-1,-2"', () => {
      expect(() => add("-1,-2"))
        .toThrowError("Negative numbers not allowed: -1, -2");
    });

    test('should throw an error for "-1,-2,3"', () => {
      expect(() => add("-1,-2,3"))
        .toThrowError("Negative numbers not allowed: -1, -2");
    });

    test('should throw an error for "//abc\n-1abc-2abc\n-3"', () => {
      expect(() => add("//abc\n-1abc-2abc\n-3"))
        .toThrowError("Negative numbers not allowed: -1, -2, -3");
    });
  });

  describe('with numbers greater than 1000', () => {
    test('should return 2 for "2,1001"', () => {
      const result = add("2,1001");
      expect(result).toBe(2);
    });
  });
});
