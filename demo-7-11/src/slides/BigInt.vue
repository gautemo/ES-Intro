<template>
  <div>
    <header>
      <h1>BigInt</h1>
      <h2>ES2020</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="BigInt"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "BigInt",
  data() {
    return {
      oldCode: `let max = Number.MAX_SAFE_INTEGER;
max++;
console.log(max);
max++;
console.log(max);
`,
      newCode: `let big = BigInt(Number.MAX_SAFE_INTEGER);
big++;
console.log(big);
big++;
console.log(big);
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
