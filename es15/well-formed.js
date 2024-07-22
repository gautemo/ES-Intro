/*
In JavaScript strings are sequences of UTF-16 code units. Which is 65536 possible characters.
The extra characters are stored in UTF-16 as surrogate pairs.
To avoid ambiguity, the two parts of the pair must be between 0xD800 and 0xDFFF.
A "lone surrogate" is a 16-bit code unit in the range 0xD800–0xDBFF or 0xDC00–0xDFFF.
Strings not containing any lone surrogates are called well-formed strings, 
and are safe to be used in functions not using UTF-16
*/

console.log('ab\uD800'.isWellFormed()) // false
console.log('ab\uD83D\uDE04c'.isWellFormed()) // true
console.log('abc'.isWellFormed()) // true

console.log('\uD83D\uDE04'.toWellFormed()) // 😄