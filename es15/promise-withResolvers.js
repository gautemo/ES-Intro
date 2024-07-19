// with Promise.withResolvers the resolve and reject functions now live in the same scope as the promise itself

const { promise, resolve, reject } = Promise.withResolvers()

async function waitForPromise() {
  const result = await promise
  console.log(result) // done
}

waitForPromise()
resolve('done')