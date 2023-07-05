/**
 * Validate if a value is a number
 * @param {number} value Value
 */
function validateNumber(value) {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error("Invalid number");
  }
}

/**
 * Validate if a value is zero
 * @param {number} value Number
 */
function validateZero(value) {
  if (value == 0) {
    throw new Error("Cannot divide by zero");
  }
}

// Export the validation functions
export { validateNumber, validateZero };