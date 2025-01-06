const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const result = [];
  arr.map((i, index) => {
    if (arr?.[index + 1] !== '--discard-prev'
      && arr?.[index - 1] !== '--discard-next'
      && i !== '--discard-next'
      && i !== '--discard-prev'
      && i !== '--double-prev'
      && i !== '--double-next') {
      result.push(i)
    }
    if (i === '--double-next' && arr[index + 1]) {
      result.push(arr[index + 1])
    }
    if (i === '--double-prev' && arr[index - 1] && arr[index - 2] !== '--discard-next') {
      result.push(arr[index - 1])
    }
  })
  return result;
}

module.exports = {
  transform
};
