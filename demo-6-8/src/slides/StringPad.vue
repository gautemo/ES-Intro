<template>
  <div>
    <header>
      <h1>String padding</h1>
      <h2>ES8</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="StringPadding"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "StringPadding",
  data() {
    return {
      oldCode: ``,
      newCode: `const text = 'hello'.padStart(9, '->').padEnd(13, '<-');
console.log(text);
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
