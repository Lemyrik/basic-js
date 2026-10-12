const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const separator = options.hasOwnProperty("separator")
      ? `${options.separator}`
      : "+",
    additionSeparator = options.hasOwnProperty("additionSeparator")
      ? `${options.additionSeparator}`
      : "|";

  let part;
  if (options.hasOwnProperty("addition")) {
    const addition = `${options.addition}`;
    const addit = addition + additionSeparator;
    const additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes")
      ? options.additionRepeatTimes
      : 1;
    part = `${str}` + addit.repeat(additionRepeatTimes - 1) + addition;
  } else {
    part = `${str}`;
  }

  const repeatTimes = options.hasOwnProperty("repeatTimes")
    ? options.repeatTimes
    : 1;

  const partLine = part + separator;
  return partLine.repeat(repeatTimes - 1) + part;
}
module.exports = {
  repeater,
};
