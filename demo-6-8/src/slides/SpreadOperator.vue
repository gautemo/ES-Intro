<template>
  <div>
    <header>
      <h1>Spread Operator</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="SpreadOperator"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "SpreadOperator",
  data() {
    return {
      oldCode: `const numArr = [10, 20, 30, 40, 50];`,
      newCode: `const numArr = [10, 20, 30, 40, 50];
console.log(Math.max(...numArr));

const concated = [...numArr, ...numArr];

console.log([...'text']);
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
