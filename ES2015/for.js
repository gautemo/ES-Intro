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

// not to be confused with for...in
for (const i in names) {
    console.log(i); //for...in will give you the index, Output: 0 1 2 3 4
}

// foreach can also be used, but they are not breakable and function must run for each element in array
names.forEach(name => console.log(name));