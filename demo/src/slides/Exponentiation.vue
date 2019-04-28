<template>
  <div>
    <header>
      <h1>Exponentiation</h1>
      <h2>ES7</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Exponentiation"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Exponentiation",
  data() {
    return {
      oldCode: `const exp = Math.pow(3, 2);
console.log(exp);`,
      newCode: `const exp = 3 ** 2;
console.log(exp);
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
