<template>
  <div>
    <header>
      <h1>Object Spread</h1>
      <h2>ES2018</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="ObjectSpread"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "ObjectSpread",
  data() {
    return {
      oldCode: `const me = { name: 'Gaute', age: 29 };`,
      newCode: `const me = { name: 'Gaute', age: 29 };
const alsoMe = { boy: true, ...me };
console.log(alsoMe);
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
