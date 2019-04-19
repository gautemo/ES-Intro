<template>
  <div>
    <h1>Template Literals</h1>
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

const l3 = 'First line \\nSecond line';
`,
      newCode: `const l2 = \`This is a number ${5}. And this is a boolean ${true}.\`;

const l4 = \`First line
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
div {
  display: flex;
  flex-direction: column;
}
.code {
  flex: 1;
}
</style>
