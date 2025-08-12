// ArrayBuffer resize

const buf = new ArrayBuffer(2, {maxByteLength: 4})
console.log(buf.resizable) // true
console.log(buf.maxByteLength) // 4

const typedArray = new Uint8Array(buf)
console.log(typedArray.length) // 2
buf.resize(4)
console.log(typedArray.length) // 4

// ArrayBuffer transfer

const original = new ArrayBuffer(16, {maxByteLength: 32})
const transferred = original.transfer()
console.log(original.detached) // true
console.log(transferred.detached) // false
const fixedLength = transferred.transferToFixedLength()
console.log(fixedLength.resizable) // false