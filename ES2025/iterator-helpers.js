function* sequence() {
  yield 1
  yield 2
}

const double = sequence().map((value) => value * 2)
console.log(double.next()) // { value: 2, done: false }
console.log(double.next()) // { value: 4, done: false }

const even = sequence().filter((value) => value % 2 === 0)
console.log(even.next()) // { value: 2, done: false }
console.log(even.next()) // { value: undefined, done: true }

const sequenceWith1Element = sequence().take(1)
console.log(sequenceWith1Element.next()) // { value: 1, done: false }
console.log(sequenceWith1Element.next()) // { value: undefined, done: true }

const dropFirstElement = sequence().drop(1)
console.log(dropFirstElement.next()) // { value: 2, done: false }
console.log(dropFirstElement.next()) // { value: undefined, done: true }

const sum = sequence().reduce((acc, value) => acc + value)
console.log(sum) // 3

const array = sequence().toArray()
console.log(array) // [ 1, 2 ]

sequence().forEach((value) => console.log(value)) // 1 // 2

const hasEven = sequence().some((value) => value % 2 === 0)
console.log(hasEven) // true

const allEven = sequence().every((value) => value % 2 === 0)
console.log(allEven) // false

const firstEven = sequence().find((value) => value % 2 === 0)
console.log(firstEven) // 2

function* wordSequence() {
  yield 'hello world'
}

const words = wordSequence().flatMap((value) => value.split(' '))
console.log(words.next()) // { value: 'hello', done: false }
console.log(words.next()) // { value: 'world', done: false }

class Iter {
  next() {
    return { done: false, value: 1 }
  }
}

const iter = new Iter()
const wrapper = Iterator.from(iter)

console.log(wrapper.next()) // { done: false, value: 1 }