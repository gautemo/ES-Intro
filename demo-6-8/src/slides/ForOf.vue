<template>
  <div>
    <header>
      <h1>for of</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="ForOf"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "ForOf",
  data() {
    return {
      oldCode: `//Old JavaScript
const names = ['Tom', 'Jerry'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach(function(name){ //Unbreakable Kimmy Schmidt
  console.log(name);
});
`,
      newCode: `const names = ['Tom', 'Jerry'];

for(const name of names){
  console.log(name);
}

// if you need the index
for (const [i, name] of names.entries()) {
    console.log(i + name);
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
