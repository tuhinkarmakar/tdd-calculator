/**
 * Regex to recognize the delimiter from the string.
 */
export const DELIMITER_RECOGNIZER_REGEX = /(?<=\/\/)(.*?)(?=\n)/

/**
 * Regex to remove the delimiter prefix from the string.
 * Also removes the "//" and the new line character.
 *
 * @example`"//;\n1;2"` -> "`1;2"`.
 */
export const DELIMITER_PREFIX_REMOVER_REGEX = /\/\/.*\n/
