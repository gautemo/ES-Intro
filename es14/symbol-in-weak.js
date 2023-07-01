// ES2023 allows the use of symbols as keys in WeakMaps, entries in WeakSets and WeakRefs, and registered in FinalizationRegistries

const symbol = Symbol('my-symbol')

// symbol as key

const weakMap = new WeakMap()
weakMap.set(symbol, 10)
console.log(weakMap.get(symbol))

// symbol as entry

const weakSet = new WeakSet()
weakSet.add(symbol)
console.log(weakSet.has(symbol))

const weakRef = new WeakRef(symbol)
console.log(weakRef.deref())

const registry = new FinalizationRegistry((value) => {
  console.log(value);
});
registry.register(symbol, 'weakRef is lost');