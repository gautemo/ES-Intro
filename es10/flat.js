//ES10 has .flat and .flatMap for arrays

/* .flat(depth) */
//The default value is 1 level flattening, 
//specify a number for specific number of levels flatten 
//or type Infinite to flatten all the way down

const arr = [1, 2, [5, [5, [12, 3]]], 0];
console.log(arr.flat()); //Output: [ 1, 2, 5, [ 5, [ 12, 3 ] ], 0 ]
console.log(arr.flat(2)); //Output: [ 1, 2, 5, 5, [ 12, 3 ], 0 ]
console.log(arr.flat(Infinity)); //Output: [1, 2, 5, 5, 12, 3, 0]

/* .flatMap(function) */
//Flattens the return value one level

const sentences = ['Outer space', 'or simply space', 'is the expanse that exists beyond the Earth'];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words); //Output: ['Outer', 'space', 'or', 'simply', 'space', 'is', 'the', 'expanse', 'that', 'exists', 'beyond', 'the', 'Earth']