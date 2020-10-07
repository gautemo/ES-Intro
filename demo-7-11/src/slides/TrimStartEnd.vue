<template>
  <div>
    <header>
      <h1>trimStart &amp; trimEnd</h1>
      <h2>ES2019</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="TrimStartEnd"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "TrimStartEnd",
  data() {
    return {
      oldCode: `const msg = '   Hello people and wolves   '
console.log(msg.trim());`,
      newCode: `const msg = '   Hello people and wolves   '
console.log(msg.trimStart());
console.log(msg.trimEnd());
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
