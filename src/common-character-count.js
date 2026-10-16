const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let str1 = s1.split("");
  let str2 = s2.split("");
  return str1.reduce((acc, el, i) => {
    if (str2.includes(el)) {
      delete str2[str2.indexOf(el)];
      acc++;
    }
    return acc;
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
