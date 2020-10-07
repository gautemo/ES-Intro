<template>
  <div>
    <header>
      <h1>Object Destructing</h1>
      <h2>ES2018</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="ObjectDestructing"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "ObjectDestructing",
  data() {
    return {
      oldCode: `const me = { name: 'Gaute', age: 29, boy: true };`,
      newCode: `const me = { name: 'Gaute', age: 29, boy: true };
const { name, ...restOfMe } = me;
console.log(name);
console.log(restOfMe);
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
