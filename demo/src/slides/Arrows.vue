<template>
  <div>
    <h1>Arrow Functions</h1>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Arrows"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Arrows",
  data() {
    return {
      oldCode: `
`,
      newCode: `const add = (n1, n2) => {
  const answer = n1 + n2;
  return answer;
};

const add2 = (n1, n2) => n1 + n2;

const hi = () => console.log('hi');

const hi2 = name => console.log('hi ' + name);
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
