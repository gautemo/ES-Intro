<template>
  <div>
    <header>
      <h1>Array find &amp; findIndex</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="ArrayFind"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "ArrayFind",
  data() {
    return {
      oldCode: `const arr = [1, 5, 3, 4, 5, 5];`,
      newCode: `const arr = [1, 5, 3, 4, 5, 5];
const el = arr.find(x => x > 3);
const i = arr.findIndex(x => x > 3);
console.log(el, i);
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
