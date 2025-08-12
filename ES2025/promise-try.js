function syncFunc() {
  return 'sync'
}

async function asyncFunc() {
  return 'async'
}

Promise.try(syncFunc)
  .then((result) => console.log(result)) // sync
  .catch((error) => console.error(error))
  .finally(() => console.log('done'))

Promise.try(asyncFunc)
  .then((result) => console.log(result)) // async
  .catch((error) => console.error(error))
  .finally(() => console.log('done'))
  

function double(value) {
  return value * 2
}

Promise.try(double, 5).then((result) => console.log(result)) // 10

function func() {
  throw new Error('buhu')
}

Promise.try(func)
  .then((result) => console.log(result))
  .catch((error) => console.error(error)) // Error: buhu