<template>
  <div>
    <header>
      <h1>let &amp; const</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="LetConst"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "LetConst",
  data() {
    return {
      oldCode: `//Old JavaScript
var boys = 5;
var boys = 20;
if(true){
    var girls = 10;
}
var humans = boys + girls;
console.log(humans);
`,
      newCode: `let value4 = 55;
value4 = 5;
if(true){
    let value5 = 9;
}
console.log(value5);

const value3 = 100;
value3 = 0;
const obj = { age: 27 };
obj.age = 28;
`
    };
  },
  components: {
    DoubleCode
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}
div {
  display: flex;
  flex-direction: column;
}
.code {
  flex: 1;
}
</style>
