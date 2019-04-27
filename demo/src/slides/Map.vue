<template>
  <div>
    <header>
      <h1>Map</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Map"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Map",
  data() {
    return {
      oldCode: ``,
      newCode: `const map = new Map();
map.set('key', 'value');
map.set('number', 10);
console.log(map.get('number'));
for (const [key, value] of map.entries()) {
    console.log([key, value]);
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
