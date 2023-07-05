// Import the validation module
import { validateNumber, validateZero } from "./utils/validation.js";

/**
 * Add the addends
 * @param {number} a Addend
 * @param {number} b Addend
 * @returns Sum
 */
const add = (a, b) => {
  validateNumber(a);
  validateNumber(b);
  return a + b;
}

/**
 * Subtract subtrahend from minuend
 * @param {number} a Minuend
 * @param {number} b Subtrahend
 * @returns Difference
 */ 
const subtract = (a, b) => {
  validateNumber(a);
  validateNumber(b);
  return a - b;
}


/**
 * Multiply the multipliers
 * @param {number} a Multiplier
 * @param {number} b Multiplier
 * @returns Multiplication
 */
const multiply = (a, b) => {
  validateNumber(a);
  validateNumber(b);
  return a * b;
}

/**
 * Divide the divident by divider
 * @param {number} a Dividend
 * @param {number} b Divider
 * @returns Division
 */
const divide = (a, b) => {
  validateNumber(a);
  validateNumber(b);
  validateZero(b);

  return a / b;
}

// Export the calculator functions
export {
  add,
  subtract,
  multiply,
  divide,
};
