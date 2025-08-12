// ES2021 introduces replaceAll, since replace only replaces first match or needs to use regex with global flag

const apples = '🍏🍏🍏';
const oranges = apples.replaceAll('🍏', '🍊');
console.log(oranges) // Output: 🍊🍊🍊