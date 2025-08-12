// ES2023 simplifies finding from last in arrays

const array = [
  { valid: true, value:  10 },
  { valid: false, value:  20 },
  { valid: true, value:  30 },
]

const lastValid = array.findLast(it => it.valid)
console.log(lastValid) // { valid: true, value:  30 }

const lastValidIndex = array.findLastIndex(it => it.valid)
console.log(lastValidIndex) // 2