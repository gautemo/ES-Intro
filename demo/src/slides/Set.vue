<template>
  <div>
    <h1>Set</h1>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Set"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Set",
  data() {
    return {
      oldCode: ``,
      newCode: `const numbers = [1, 1, 1, 2, 3, 3, 3, 4, 5, 4];
const uniqueNumbers = new Set(numbers);
console.log(...uniqueNumbers);
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
