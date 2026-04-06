/**
 * ES2026 introduces sumPrecise
 */

const sum = Math.sumPrecise([1,2,3,4,5])
console.log(sum) // 15

// summing a list of floating point numbers more precisely
let values = [1e20, 0.1, -1e20]
console.log(values.reduce((a, b) => a + b, 0)) // 0
console.log(Math.sumPrecise(values)) // 0.1