//old way
const l1 = 'This is a number ' + 5 + '. And this is a boolean ' + true + '.';

//Template Literals
const l2 = `This is a number ${5}. And this is a boolean ${true}.`;

/* 
Template literals are strings using backticks ` 
This allows you to use the dollar sign with brackets to parse javascript code.
*/

const l3 = 'First line \nSecond line';
const l4 = `First line
Second line`

console.log(l3);
console.log(l4);

/* Template literals also makes multiline easier and visual. And removes the need for \n */