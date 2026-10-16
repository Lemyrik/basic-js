const { NotImplementedError } = require("../lib");

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
  let res = "";
  let str = `${n}`;
  let isDeleted = false;
  for (let i = 0; i < str.length; i++) {
    if ((i === str.length - 1 || str[i] < str[i + 1]) && !isDeleted)
      isDeleted = true;
    else res += str[i];
  }
  return +res;
}

module.exports = {
  deleteDigit,
};
