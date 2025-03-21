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

  return numbers.split(',')
    .map(Number)
    .reduce((accu, curr) => accu + curr);
}
