/*
The Atomics namespace object are for atomic operations.
Atomics is helpful for synchronization between multiple threads such as workers.
ES2024 has added the waitAsync function.
*/

const sab = new SharedArrayBuffer(1024)
const int32 = new Int32Array(sab)

/* Just for a simple example, but would make more sense to wait in another thread */
async function waitForPromise() {
  const result = Atomics.waitAsync(int32, 0, 0, 1)
  console.log(await result.value) // ok
}

waitForPromise()

Atomics.store(int32, 0, 0)
Atomics.notify(int32, 0)