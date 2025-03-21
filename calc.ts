import {
  DELIMITER_PREFIX_REMOVER_REGEX,
  DELIMITER_RECOGNIZER_REGEX
} from "./constants";

/**
 * Takes a string representation of numbers and returns the sum of those numbers.
 *
 * @author Tuhin Karmakar <tuhin@tuhinkarmakar.me>
 * @export
 * @param {string} numbers The string of numbers. Example: "1,2,3"
 * @return {number} The sum of the numbers.
 */
export function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }

  const delimiter = numbers.match(DELIMITER_RECOGNIZER_REGEX)?.[0] ?? ",";
  const withoutDelimPrefix = numbers.replace(DELIMITER_PREFIX_REMOVER_REGEX, "");
  const nums = withoutDelimPrefix.split(delimiter) // ["1", "2", "3"] or ["1\n2", "3"]

  const positiveNums = [] // Excluding numbers greater than 1000
  const negativeNums = []

  for (const group of nums) {
    const nums = group.split('\n').map(Number) // "1" -> [1], 1\n2" -> [1, 2]

    for (const num of nums) {
      if (num < 0) {
        negativeNums.push(num)
      } else if (num <= 1000) {
        positiveNums.push(num)
      }
    }
  }

  if (negativeNums.length) {
    throw new Error(`Negative numbers not allowed: ${negativeNums.join(", ")}`);
  }

  return positiveNums.reduce((accu, curr) => accu + curr);
}
