this.value = 5; //only arrow function can reach this value without saving this to another variable.

//old way
const self = this;
const f1 = function (number) {
    const answer = number * self.value;
    console.log(answer);
}

//Arrow functions
const f2 = (number) => {
    const answer = number * this.value;
    console.log(answer);
}

f1(2); //Output: 10
f2(2); //Output: 10

/* Arrow functions doesn't bind to another scope and has the same this as outside*/

const f3 = () => console.log('hi'); // single statement doesn't need brackets

const f4 = (n1, n2) => n1 * n2; //single statement with a value uses implicit return, so this is equivalent to return n1 * n2
console.log(f4(2, 3)); //Output: 6

const f5 = () => console.log('hi'); //no parameters needs parentheses
const f6 = p1 => console.log(`input: ${p1}`); //parentheses are optional when there's only one parameter
const f7 = (p1, p2, ...p3) => console.log(`input: ${p1}, ${p2} and rest ${p3}`); //multiple parameters needs parentheses

f5(); //Output: hi
f6(true); //Output: input: true
f7(7, 'seven', false, true, 100); //Output: input: 7, seven and rest false,true,100