//Rest Parameters
function func(param1, ...params) { //rest parameters always need to be last
    console.log(params);
}
func(1, 2, 3, "abc", { age: 100 }); // Output: [ 1, 2, 3, 'abc', { age: 100 } ]

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num);
}

const tot = sum(1, 2, 3, 4) //Now you can call the function with any number of numbers.
console.log(tot); //Output: 10

/*
Rest parameters should be used instead of arguments, 
which is the old way of getting unknown number of parameters, 
but is not a real array with it's accompaning methods.
*/

//Spread Operator
const numArr = [10, 20, 30, 40, 50];
const tot2 = sum(...numArr); // Arrays can be spread out. Kind of changing the array to 10, 20, 30, 40, 50 and passing in 5 parameters
console.log(tot2); //Output: 150
console.log(Math.max(...numArr)); //Useful for using arrays in methods like Math.max,
//which requires the parameters separeted like this Math.max(10, 20, 30, 40, 50). Output: 50

const arr1 = ['hello', 'friends'];
const arr2 = [',', 'you', 'are', 'cool'];
const concated = arr1.concat(arr2); //Familiar way of concating arrays
const concated2 = [...arr1, ...arr2]; //New option for how to concat arrays. Choose what you like
console.log(concated2); //Output: [ 'hello', 'friends', ',', 'you', 'are', 'cool' ]

console.log([...'This is a text']); //Puts each character in an array

/*
The spread operator works on arrays and strings.
In ES9/ECMAScript 2018 objects can also be spread.
*/