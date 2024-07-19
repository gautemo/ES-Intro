// ES2024 introduces array grouping

const ducks = [
  { age: 30, name: 'Donald Duck' },
  { age: 12, name: 'Dewey' },
  { age: 65, name: 'Scrooge McDuck' },
]

const grouped = Object.groupBy(ducks, d => d.age < 18 ? 'children' : 'adults')
console.log(grouped.children) // [ { age: 12, name: 'Dewey' } ]
console.log(grouped.adults) // [ { age: 30, name: 'Donald Duck' }, { age: 65, name: 'Scrooge McDuck' } ]

const map = Map.groupBy(ducks, d => {
  if(d.age < 18) return 'children'
  if(d.age > 200) return 'ghosts'
  return 'adults'
})
console.log(map.get('children')) // [ { age: 12, name: 'Dewey' } ]
console.log(map.has('ghosts')) // false