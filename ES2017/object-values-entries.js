//ES8 introduces object values() and entries(), like arrays has
const person = { name: 'Gaute', age: 27 };
console.log(Object.values(person));

for (let [p, val] of Object.entries(person)) {
    console.log(p, val);
}