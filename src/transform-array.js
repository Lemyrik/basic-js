const { NotImplementedError } = require("../lib");

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
  if (!Array.isArray(arr))
    return "'arr' parameter must be an instance of the Array!";
  return arr.reduce((acc, el, i, arr) => {
    if (el === "--double-next" && i < arr.length - 1) {
      acc.push(arr[i + 1]);
      return acc;
    } else if (
      el === "--double-prev" &&
      i > 0 &&
      arr[i - 2] !== "--discard-next"
    ) {
      acc.push(acc[i - 1]);
      return acc;
    } else if (
      arr[i + 1] === "--discard-prev" ||
      el === "--discard-prev" ||
      el === "--discard-next" ||
      arr[i - 1] === "--discard-next" ||
      el === "--double-prev" ||
      el === "--double-next"
    )
      return acc;
    acc.push(el);
    return acc;
  }, []);
}

module.exports = {
  transform,
};
