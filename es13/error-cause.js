// ES2022 introcuses the cause property on Error
const myerror = new Error('Some error', { cause: 'just to demo' })
console.log(myerror.cause)

try {
  const empty = {}
  console.log(empty.not.existing)
} catch (error) {
  throw new Error('It failed', { cause: error });
}