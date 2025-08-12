const list = ['🐯', '🦭', '🦞']

// Old JavaScript
const lastOld = list[list.length - 1]
const firstOld = list[0]

// ES2022 has .at() method on Array and string
// like bracket operator but supports negative indices
const last = list.at(-1)
const first = list.at(0) // I would probably stick with [0] for this

console.log(first, last)