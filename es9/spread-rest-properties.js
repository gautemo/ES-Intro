//ES6 introduces the three dots (...) for rest of parameters and spreading of arrays
//ES9 has implemented the same feature for object properties

//Spread into new object
const me = { name: 'Gaute', age: 27 };
const alsoMe = { boy: true, ...me };
console.log(alsoMe);

//rest of object properties in object destructing
const { name, ...restOfMe } = alsoMe;
console.log(name, restOfMe);