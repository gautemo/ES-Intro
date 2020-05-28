// ES11 has Promise.allSettled which does not short-circuit

const doAsync = shouldResolve => new Promise((resolve, reject) => shouldResolve ? resolve('ok') : reject('nope'))

const example = async () => {
  const promises = [
    doAsync(true),
    doAsync(false)
  ];

  const [r1, r2] = await Promise.allSettled(promises);
  console.log(r1, r2); // Output: { status: 'fulfilled', value: 'ok' } { status: 'rejected', reason: 'nope' }. Where Promise.all would throw error at first reject
}
example();