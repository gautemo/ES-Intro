<template>
  <div>
    <header>
      <h1>Object values() &amp; entries()</h1>
      <h2>ES2017</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="ValuesEntries"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "ValuesEntries",
  data() {
    return {
      oldCode: `const person = { name: 'Gaute', age: 29 };`,
      newCode: `const person = { name: 'Gaute', age: 29 };
console.log(Object.values(person));

for (let [p, val] of Object.entries(person)) {
    console.log([p, val]);
}
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
