/* Promises */

// Old JavaScript needed callback functions if waiting for methods
function getDataFromNetwork1(callback) {
    //settimeout to pretend a network call
    setTimeout(function () {
        callback();
    }, 300);
}

function onDone() {
    console.log('Finally!');
}

getDataFromNetwork1(onDone); //Output after 300 ms: Finally!

//ES6 Promises
function getDataFromNetwork2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 300); //If value should be retured, do it inside resolve()
    });
}

getDataFromNetwork2()
    .then(onDone); //Output after 300 ms: Finally!

//Promises makes it a lot easier reading the code and knowing the flow of the code
//But Promises really get's its win with await async which is in ES8

/* Set */
const numbers = [1, 1, 1, 2, 3, 3, 3, 4, 5, 4];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5 }
for (const n of uniqueNumbers) { //Sets can be iterated like arrays
    console.log(n);
}
//Set has useful methods such as add, clear, delete(value), has, ++
//Trick with spread if you really need an unique array
console.log([...new Set(numbers)]);

/* Map */
const map = new Map();
map.set('key', 'value');
map.set('number', 10);
console.log(map.get('number')); //Output: 10
for (const [key, value] of map.entries()) {
    console.log(key, value);
}