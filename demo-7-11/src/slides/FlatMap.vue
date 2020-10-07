<template>
  <div>
    <header>
      <h1>flatMap</h1>
      <h2>ES2019</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="FlatMap"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "FlatMap",
  data() {
    return {
      oldCode: `const sentences = [
  'Outer space', 
  'or simply space', 
  'is the expanse that exists beyond the Earth'
];
const words = sentences.map(sentence => sentence.split(' '));
console.log(words);`,
      newCode: `const sentences = [
  'Outer space', 
  'or simply space', 
  'is the expanse that exists beyond the Earth'
];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words);
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
