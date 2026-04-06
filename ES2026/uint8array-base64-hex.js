/**
 * ES2026 adds 
 * Uint8Array.prototype.toBase64
 * Uint8Array.prototype.toHex
 * Uint8Array.fromBase64
 * Uint8Array.fromHex
 */

const arr = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])
console.log(arr.toBase64()) // 'SGVsbG8gV29ybGQ='
console.log(arr.toHex()) // '48656c6c6f20576f726c64'

console.log(Uint8Array.fromBase64('SGVsbG8gV29ybGQ=')); // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])
console.log(Uint8Array.fromHex('48656c6c6f20576f726c64')); // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])