import { add, subtract, multiply, divide } from '../src/calculator.js';

describe('Calculator', () => {
  it('should correctly add two numbers', () => {
    const result = add(5, 3);
    expect(result).toBe(8);
  });

  it('should correctly subtract two numbers', () => {
    const result = subtract(7, 2);
    expect(result).toBe(5);
  });

  it('should correctly multiply two numbers', () => {
    const result = multiply(4, 6);
    expect(result).toBe(24);
  });

  it('should correctly divide two numbers', () => {
    const result = divide(10, 2);
    expect(result).toBe(5);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});