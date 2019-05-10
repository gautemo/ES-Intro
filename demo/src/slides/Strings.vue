<template>
  <div class="multi-line">
    <header>
      <h1>Template Literals</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Strings"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Strings",
  data() {
    return {
      oldCode: `//old way
const l1 = 'This is a number ' + 5 + '. And this is a boolean ' + true + '.';

const l2 = 'First line \\nSecond line';
`,
      newCode: `const l1 = \`This is a number \${5}. And this is a boolean \${true}.\`;

const l2 = \`First line
Second line\`;
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
