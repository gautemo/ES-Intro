// ES2021 has Promise.any when you wan't to continue as soon as one of the promises fulfills.

const slow = () => new Promise(resolve => {
  setTimeout(() => resolve('slow'), 2_000);
});
const fast = () => new Promise(resolve => {
  setTimeout(() => resolve('fast'), 500);
});
const immediateFail = () => new Promise((_, reject) => reject('nope'));

const example = async () => {
  const promises = [
    slow(),
    fast(),
    immediateFail(),
  ];
  const first = await Promise.any(promises).catch(error => console.log('Every promise failed', error.errors));
  console.log(first); // Output: fast
}
example();