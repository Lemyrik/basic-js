const { NotImplementedError } = require('../extensions/index.js');

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
  const arr = str.split('');
  let prevSimbol = '';
  let result = '';
  arr.map((simb) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i] === simb && arr[i] === arr[i+1] ? count++ : null;
    }
    count > 0 ? result += prevSimbol == simb ? '' : `${count + 1}${simb}` : result += `${simb}`;
    prevSimbol = simb;

  })
  return result;
}

module.exports = {
  encodeLine
};
