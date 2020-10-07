<template>
  <div>
    <header>
      <h1>Nullish Coalescing</h1>
      <h2>ES2020</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="NullishCoalescing"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "NullishCoalescing",
  data() {
    return {
      oldCode: `const person = { name: 'Gaute' }
const name = person.name;
console.log(name);
`,
      newCode: `const person = { name: 'Gaute' }
const name = person.name ?? 'anonymous';
console.log(name);
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
