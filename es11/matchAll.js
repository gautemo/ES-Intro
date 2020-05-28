// ES11 has matchAll

const string = '5 12 88';
const matches = string.matchAll(/\d+/g);
for (const match of matches) {
  console.log(match);
}

// match only gives you the substrings
// matchAll includes the index
// Output:
// ['5', index: 0, input: '5 12 88', groups: undefined]
// ['12', index: 2, input: '5 12 88', groups: undefined ]
// ['88', index: 5, input: '5 12 88', groups: undefined]