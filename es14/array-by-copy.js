// ES2023 finally lets us work with an array without mutating the original array

const array = [10, 2, 3]

console.log(array.toReversed()) // [ 3, 2, 10 ]
console.log(array.toSorted((a, b) => a - b)) // [ 2, 3, 10 ]
console.log(array.with(0, 1)) // [ 1, 2, 3 ]
console.log(array.toSpliced(0, 2, 100, 200)) // [ 100, 200, 3 ]
