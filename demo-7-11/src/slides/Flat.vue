<template>
  <div>
    <header>
      <h1>flat</h1>
      <h2>ES2019</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Flat"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Flat",
  data() {
    return {
      oldCode: `const arr = [1, 2, [5]];`,
      newCode: `const arr = [1, 2, [5, [5, [12, 3]]], 0];
console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr.flat(Infinity));
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
