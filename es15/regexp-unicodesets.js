// The v flag is an "upgrade" to the u flag

const greek = /\p{Script_Extensions=Greek}/v.test('μ')
console.log(greek) // true

const emoji = /\p{Emoji}/v.test('👽')
console.log(emoji) // true

const digitNotNine = /[\d--9]/v
console.log(digitNotNine.test('9')) // false
console.log(digitNotNine.test('1')) // true

const greekLetter = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v
// U+03C0 GREEK SMALL LETTER PI
console.log(greekLetter.test('π')) // true
// U+1018A GREEK ZERO SIGN
console.log(greekLetter.test('𐆊')) // false

const union = /[\q{1|2}]/v
console.log(union.test('1')) // true
