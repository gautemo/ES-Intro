<template>
  <div>
    <h1>Object Assign</h1>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="ObAssign"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "ObAssign",
  data() {
    return {
      oldCode: ``,
      newCode: `const person = { name: 'Gaute', age: 27 };
const work = { company: 'Sopra Steria', place: 'Oslo' };
Object.assign(person, work); //Person now contains all properties from work
console.log(person.company);
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
