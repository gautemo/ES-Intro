//Old JavaScript
var value = 5;
var value = 20;
if(true){
    var value2 = 10;
}
console.log(value2); //Output: 10

/*
As you can see var works differently from what other programming languages are.
1. You can declare the same variable multiple times.
2. var is functions scoped and not blocked scoped as we are used to
*/

// ES6 introduces const and let
const value3 = 100;
value3 = 0; //❌ not allowed, throws TypeError: Assignment to constant variable.
const obj = { age: 27 };
obj.age = 28; //✔ allowed, properties are not constant values.

let value4 = 55;
value4 = 5; //✔ allowed
if(true){
    let value5 = 9;
}
console.log(value5); //❌ not allowed, throws ReferenceError: value5 is not defined

/*
let and const works more like other programming languages and behaved like you are used to.
const are for constant variables that cannot be redefined. But you can change properties on the object.
let are variables that can be redefined.
*/