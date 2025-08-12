//ES10 has Object.fromEntries to turn maps or arrays into an object

const map = new Map();
map.set('height', 186);
map.set('age', 27);
console.log(Object.fromEntries(map)); //Output: { height: 186, age: 27 }

const arr = [[0, 'a'], [1, 'b'], [2, 'c']];
console.log(Object.fromEntries(arr)); //Output: { '0': 'a', '1': 'b', '2': 'c' }