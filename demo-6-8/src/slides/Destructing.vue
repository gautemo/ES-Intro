<template>
  <div>
    <header>
      <h1>Destructing</h1>
      <h2>ES6</h2>
    </header>
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
const { firstName: name, age: a } = person;

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
