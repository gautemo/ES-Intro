//Old JavaScript
function getDataFromNetwork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('hi'), 300);
    });
}

getDataFromNetwork()
    .then(res => console.log(res)); //Output after 300 ms: Finally!

//ES8 introduces async and await for asynchronous code

async function asyncCall() {
    const res = await getDataFromNetwork();
    console.log(res);
}

asyncCall();

//With arrow functions
const asyncArrow = async () => {
    const res = await getDataFromNetwork();
    console.log(res);
}

//If function contains multiple awaits that don't depend on each other, this is unnecicary waiting
const multipleAwaits = async () => {
    const res1 = await getDataFromNetwork();
    const res2 = await getDataFromNetwork();
    console.log(res1, res2); //Output: hi, hi
}
multipleAwaits();

//Two better aproaches
const multipleAwaits2 = async () => {
    //start methods right away, and use await before using the result
    const res1 = getDataFromNetwork();
    const res2 = getDataFromNetwork();
    console.log(await res1, await res2); //Output: hi, hi
}
multipleAwaits2();

const multipleAwaits3 = async () => {
    //Use Promise.all, which takes in an array of promises and returns their result in an array
    const res = await Promise.all([getDataFromNetwork(), getDataFromNetwork()]);
    console.log(res); //Output: [ 'hi', 'hi' ]
}
multipleAwaits3();