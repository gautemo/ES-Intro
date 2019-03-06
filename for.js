/* Looping arrays */
const names = ['Joe', 'Jim', 'Jan', 'Jerry', 'Tim'];

//old way
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// for...of
for (const name of names) {
    console.log(name);
}

// if you need the index
for (const [i, name] of names.entries()) {
    console.log(i, name);
}

// for...in, don't confuse of and in
for (const i in names) {
    console.log(i); //in will give you the index, Output: 0 1 2 3 4
}

// so for...in is not often that useful, but maybe sometimes for objects
const person = { name: 'Gaute', age: 27 };
for (const prop in person) {
    console.log(prop); //Output: name age
}