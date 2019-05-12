<template>
  <div>
    <header>
      <h1>includes</h1>
      <h2>ES7</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Includes"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Includes",
  data() {
    return {
      oldCode: `//Old JavaScript
const exists = [1, 2, 3].indexOf(1) !== -1;
`,
      newCode: `const exists = [1, 2, 3].includes(1);
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
