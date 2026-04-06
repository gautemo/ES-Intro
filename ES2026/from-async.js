function returnPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve('wait 300 ms for me'), 300)
  })
}

const asyncIterable = async function* () {
  yield await returnPromise()
  yield await returnPromise()
}

const array = await Array.fromAsync(asyncIterable())
console.log(array) // [ 'wait 300 ms for me', 'wait 300 ms for me' ]
