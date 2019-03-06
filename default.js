// Default Function Parameters

function append(value, array = []){
    array.push(value);
    return array;
}

append(1); // [ 1 ]
append(8, [5,6,7]); // [ 5, 6, 7, 8 ]

// default parameters can use values from other parameters
function greet(name, msg = 'Hello friend', funfact = `Your name has ${name.length} characters.`){
    console.log(`${msg}, ${name}. Did you know; ${funfact}`);
}

greet('Gaute'); //Output: Hello friend, Gaute. Did you know; Your name has 5 characters.
greet('Gaute', undefined, 'The sky is blue.'); // If you want to use a default value for a parameter in the middle, you need to assign it undefined.
//Output: Hello friend, Gaute. Did you know; The sky is blue.