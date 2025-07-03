const reString = RegExp.escape('Hello world.')
console.log(reString) // \x48ello\x20world\.
const re = new RegExp(reString)
console.log(re.test('Hello world.')) // true
console.log(re.test('Hello world!')) // false