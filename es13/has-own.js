// ES2022 hasOwn to check if property exists on object
// a convenient alternative to Object.prototype.hasOwnProperty
const object = {
  myNumber: 5
}
console.log(Object.hasOwn(object, 'myNumber'))
console.log(Object.hasOwn(object, 'nonExistent'))