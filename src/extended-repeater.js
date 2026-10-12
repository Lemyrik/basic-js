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
  let addit = options?.addition + additionSeparator;
  let part;
  if (options.addition) {
    part =
      str + addit.repeat(options.additionRepeatTimes - 1) + options.addition;
  } else {
    part = str;
  }

  let partLine = part + separator;
  return partLine.repeat(options.repeatTimes - 1) + part;
}

module.exports = {
  repeater,
};
