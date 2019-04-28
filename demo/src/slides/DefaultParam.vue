<template>
  <div>
    <header>
      <h1>Default Parameters</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="DefaultParam"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "DefaultParam",
  data() {
    return {
      oldCode: `function hi(name, msg){
  if(!msg){
    msg = 'Hello, ';
  }
  console.log(msg + name);
}

hi('Gaute');
hi('Gaute', 'Stupid, ');`,
      newCode: `function hi(name, msg = 'Hello, '){
  console.log(msg + name);
}

hi('Gaute');
hi('Gaute', 'Stupid, ');

function copy(array, nrToCopy = array.length){
  return array.slice(0, nrToCopy);
}

console.log(copy([1,2,3]));
console.log(copy([1,2,3], 2));
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
