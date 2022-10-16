const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == '') return ''
  let arr = [0, str[0]]
  let i = 0
  str.split('').forEach(el => {
    if (el == arr[i + 1]) {
      arr[i]++
    } else {
      i += 2
      arr = arr.concat(1, el)
    }
  })
  return arr.filter(el => el != 1).join('')
}

module.exports = {
  encodeLine
};