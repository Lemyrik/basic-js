const { NotImplementedError } = require('../extensions/index.js');

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
  const addition = options?.addition !== undefined ? String(options.addition) : '';
  const additionSeparator = options?.additionSeparator || '|';
  const repeatTimes = options?.repeatTimes || 1;
  const additionRepeatTimes = options?.additionRepeatTimes || 1;
  const separator = options?.separator || '+';

  const addPart = str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;

  return addPart + (separator + addPart).repeat(repeatTimes - 1);
}

module.exports = {
  repeater
};
