<template>
  <div>
    <h1>Destructing</h1>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Destructing"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Destructing",
  data() {
    return {
      oldCode: `const person = { firstName: 'Gaute', lastName: 'Meek Olsen',
       age: 27, nation: 'Norway' };

// Old JavaScript
var firstName = person.name;
var age = person.age;
`,
      newCode: `const person = { firstName: 'Gaute', lastName: 'Meek Olsen', 
      age: 27, nation: 'Norway' };

const { firstName, age } = person;

function printName({ firstName, lastName }) {
    console.log(firstName + ' ' + lastName);
}
printName(person);
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
