const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 4])

console.log(set1.intersection(set2)) // Set(2) { 2, 3 }

console.log(set1.union(set2)) // Set(4) { 1, 2, 3, 4 }

// get elements in this set but not the other one
console.log(set1.difference(set2)) // Set(1) { 1 }

// get elements in one of the sets but not in both
console.log(set1.symmetricDifference(set2)) // Set(2) { 1, 4 }

console.log(set1.isSubsetOf(set2)) // false

console.log(set1.isSupersetOf(set2)) // false

// true if no common element
console.log(set1.isDisjointFrom(set2)) // false