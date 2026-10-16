const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, row, j, arr) => {
    return (
      acc +
      row.reduce((acc, el, i) => {
        if (j === 0 || arr[j - 1][i] !== 0) acc += el;
        return acc;
      }, 0)
    );
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};
