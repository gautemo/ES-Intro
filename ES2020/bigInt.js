// Old JavaScript
let max = Number.MAX_SAFE_INTEGER;
max++;
console.log(max); // Output: 9007199254740992
max++;
console.log(max); // Output: 9007199254740992. which is the same

// ES11 has BigInt
let big = BigInt(Number.MAX_SAFE_INTEGER);
big++;
console.log(big); // Output: 9007199254740992n
big++;
console.log(big); // Output: 9007199254740993n