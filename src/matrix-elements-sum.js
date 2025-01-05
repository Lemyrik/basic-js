const { NotImplementedError } = require('../extensions/index.js');

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
  let sum = 0;

  matrix.map((row, index) => {
    if (index === 0) {
      for (let i = 0; i < row.length; i++) {
        row[i] > 0 ? sum += row[i] : null;
      }
    }
    else {
      for (let i = 0; i < row.length; i++) {
        matrix[index - 1][i] > 0 ? sum += row[i] : null;
      }
    }
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
