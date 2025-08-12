// ES2021 has logical assignment

let x = 10;

x &&= 0;
console.log(x);
x ||= 1;
console.log(x);
x ??= 2;
console.log(x);


// why not just use x = x && y 
// They only perform an assignment if the logical operation would evaluate the right-hand side.
const obj = {
  value: 0,
  get y(){
    return this.value;
  },
  set y(value){
    console.log('side-effect');
    this.value = value;
  }
}

obj.y ??= 99;
obj.y = obj.y ?? 99; // Output: side-effect
console.log(obj.y);