/**
 * JSON.parse source text access can help with losing data stored in JSON text
 */

const json = `{
  "name": "Scrooge McDuck",
  "money": 9007199254740993
}`

const dataLossy = JSON.parse(json)
console.log(dataLossy) // last digit is 2 instead of 3

const data = JSON.parse(json, (key, value, { source }) => {
  if(key === 'money') {
    return BigInt(source)
  }
  return value
})
console.log(data)