<template>
  <div>
    <header>
      <h1>String repeat &amp; includes</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="StringRepInc"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "StringRepInc",
  data() {
    return {
      oldCode: ``,
      newCode: `console.log('123'.repeat(5));
console.log('123'.includes('23'));
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
