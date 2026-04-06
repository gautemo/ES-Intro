/**
 * Map and WeakMap has a new method getOrInsert to handle default values
 */

const map = new Map()

// Old javascript
if (!map.has('count')) {
  map.set('count', 0)
}
console.log(map.get('count'))

// ES2026 upsert
console.log(map.getOrInsert('count', 0))