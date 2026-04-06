/**
 * Error.isError is a more robust alternative to instanceof Error
 */

console.log(Error.isError(new Error())) // true
console.log(Error.isError('error')) // false