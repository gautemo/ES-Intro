//Old way
var exists1 = [1, 2, 3].indexOf(1) !== -1;

//ES7 has Array.prototype.includes()
const exists2 = [1, 2, 3].includes(1);

//This way the code is much easier to read, than finding the index of an element and checking if it's minus one.