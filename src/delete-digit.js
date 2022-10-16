const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return n.toString()
  .split('')
  .map((it, index1, arr) => Number(arr.filter((dig, index2) => index2 != index1)
  .join('')))
  .sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
