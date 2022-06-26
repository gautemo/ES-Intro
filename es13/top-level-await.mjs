// Old JavaScript
(async() => {
  const response = await fetch('https://github.com/')
  console.log(await response.text())
})()

// ES2022 has top level await
const response = await fetch('https://github.com/')
console.log(await response.text())
