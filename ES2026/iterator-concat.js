/**
 * ES2026 has Iterator.concat to simplify joining iterators
 */

function* sequence1() {
  yield 1
  yield 2
}

function* sequence2() {
  yield 3
  yield 4
}

const joined = Iterator.concat(sequence1(), sequence2(), [5, 6])

for(const n of joined) {
  console.log(n)
}