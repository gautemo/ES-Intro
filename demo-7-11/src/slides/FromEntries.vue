<template>
  <div>
    <header>
      <h1>fromEntries</h1>
      <h2>ES2019</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="FromEntries"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "FromEntries",
  data() {
    return {
      oldCode: ``,
      newCode: `const map = new Map();
map.set('height', 186);
map.set('age', 29);
console.log(Object.fromEntries(map));

const arr = [[0, 'a'], [1, 'b'], [2, 'c']];
console.log(Object.fromEntries(arr));
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
