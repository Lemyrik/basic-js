const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const pairCount = n.split("-");
  const correctSimbol = n
    .split("-")
    .join("")
    .split("")
    .every((i) => (Number.isNaN(+i) ? i >= "A" && i <= "F" : +i >= 0 && +i <= 9));
  const fg = pairCount.every((i) => i.length === 2) && pairCount.length === 6;
  return fg && correctSimbol;
}
module.exports = {
  isMAC48Address
};
