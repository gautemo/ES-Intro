/* Some new ES6 Methods */

//Object.assign
const person = { name: 'Gaute', age: 27 };
const work = { company: 'Sopra Steria', place: 'Oslo' };
Object.assign(person, work); //Person now contains all properties from work
console.log(person.company); //Output: Sopra Steria

//Array.find and Array findIndex
console.log([1, 5, 3, 4, 5, 5].find(x => x > 3)); //Outputs the first one thats true: 5
console.log([1, 5, 3, 4, 5, 5].findIndex(x => x > 3)); //Outputs the first index: 1

//String repeat and includes
console.log('123'.repeat(2)); //Output: 123123
console.log('123'.includes('2')); //Output: true
//Not to be confused with array.includes which is ES7 functionality
