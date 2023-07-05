const { validateNumber, validateZero } = require('../../src/utils/validation');

describe('Validation', () => {
  it('should not throw an error for a valid number', () => {
    expect(() => validateNumber(5)).not.toThrow();
  });

  it('should throw an error for an invalid number', () => {
    expect(() => validateNumber('invalid')).toThrow('Invalid number');
  });

  it('should throw an error for NaN', () => {
    expect(() => validateNumber(NaN)).toThrow('Invalid number');
  });

  it('should throw an error for Infinity', () => {
    expect(() => validateNumber(Infinity)).toThrow('Invalid number');
  });

  it('should not throw an error for a non-zero number', () => {
    expect(() => validateZero(5)).not.toThrow();
  });

  it('should throw an error for zero', () => {
    expect(() => validateZero(0)).toThrow('Cannot divide by zero');
  });
});