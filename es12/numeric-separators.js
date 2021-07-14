// ES2021 has numeric separators with underscore to make numbers easier to read

const hardToRead = 1000000000;
const easyToRead = 1_000_000_000;
console.log(hardToRead === easyToRead); // Output: true

const decimal = 1_000.333_333;