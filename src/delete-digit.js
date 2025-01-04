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
  let maxNum = 0;
  const stringNum = String(n)
  for(let i = 0; i < stringNum.length; i++) {
    let newNumber = stringNum.substring(0, i) + stringNum.substring(i + 1);
    +newNumber > maxNum ? maxNum = +newNumber : null;
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
