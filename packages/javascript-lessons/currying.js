/**
 * @description
 * Currying is the process of taking a function with multiple arguments and turning it
 * into a sequence of functions each with only a single argument.
 * 
 * Curried functions are great to improve code reusability and functional composition.
 * @see https://github.com/sudheerj/javascript-interview-questions#what-is-the-currying-function
 */

// Example 
const curry = (fn) => (a) => (b) => (c) => fn(a, b, c);
const sumUnary = curry((a, b, c) => a + b + c); 

console.log(sumUnary(1)(2)(3)); // 6
