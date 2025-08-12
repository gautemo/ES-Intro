const float16 = new Float16Array(2)
float16[0] = 42
console.log(float16[0]) // 42
float16[0] = 66000
console.log(float16[0]) // Infinity

console.log(Math.f16round(64500)) // 64512

const buffer = new ArrayBuffer(16)
const view = new DataView(buffer)
view.setFloat16(1, Math.PI)
console.log(view.getFloat16(1)) // 3.140625