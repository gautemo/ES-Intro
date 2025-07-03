// Modifiers allow you to change RegExp flags within a subexpression.

const re = /^Hello\s(?i:w)orld$/
console.log(re.test('Hello world')) // true
console.log(re.test('Hello World')) // true
console.log(re.test('HELLO WORLD')) // false