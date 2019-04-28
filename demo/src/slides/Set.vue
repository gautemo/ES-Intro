<template>
  <div>
    <header>
      <h1>Set</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Set"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Set",
  data() {
    return {
      oldCode: `const numbers = [1, 1, 1, 2, 3, 3, 3, 4, 5, 4];`,
      newCode: `const numbers = [1, 1, 1, 2, 3, 3, 3, 4, 5, 4];
const uniqueNumbers = new Set(numbers);
console.log(...uniqueNumbers);
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
