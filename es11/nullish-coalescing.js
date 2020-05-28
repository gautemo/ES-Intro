// ES11 has nullish coalescing ??

// In JavaScript we already could set default value with logical shortcutting with ||
// Since if the first value was falsy the next value wold be evaluated and used.
// But since an empty string and 0 is falsy, this won't work for all scenarios.
// With ?? this works for all and is more clear and only uses default for null and undefined.

const house = { age: 0, street: 'Duck city', price: null }

const age = house.age ?? 100;
const street = house.street ?? 'no-name';
const price = house.price ?? 1000;
const color = house.color ?? 'Blue';

console.log({ age, street, price, color }); // Output: { age: 0, street: 'Duck city', price: 1000, color: 'Blue' }