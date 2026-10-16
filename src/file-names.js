const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  return names.reduce((acc, el, i, arr) => {
    if (acc.includes(el)) {
      acc.push(
        el + `(${arr.slice(0, i).filter((str) => el === str).length || 1})`,
      );
      console.log(arr.slice(0, i));
    } else acc.push(el);
    return acc;
  }, []);
}

module.exports = {
  renameFiles,
};
