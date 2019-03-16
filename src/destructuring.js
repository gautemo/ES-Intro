const person = { firstName: 'Gaute', lastName: 'Meek Olsen', age: 27, nation: 'Norway' };

// Old JavaScript
var firstNameO = person.name;
var ageO = person.age;

// ES6 uses object matching
const { firstName, age } = person;

//can also be used in function parameters
function printName({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`);
}
printName(person); //Output: Gaute Meek Olsen

/* With destructuring in ES6 you can write a lot less code and cleaner code
by getting the variables you are going to use with brackets */