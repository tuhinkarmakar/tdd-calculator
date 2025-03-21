/**
 * Add function that takes a string of numbers and
 * returns the sum of those numbers.
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

  const delimiterRegex = /(?<=\/\/)(.*?)(?=\n)/
  const delimRemoverRegex = /\/\/.*\n/

  const delimiter = numbers.match(delimiterRegex)?.[0] ?? ",";
  const numsWithoutDelim = numbers.replace(delimRemoverRegex, "");

  const nums = numsWithoutDelim.split(delimiter)
    .flatMap(str => str.split('\n'))
    .map(Number)

  const negatives = nums.filter(num => num < 0);

  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.filter(num => num <= 1000)
    .reduce((accu, curr) => accu + curr);
}
