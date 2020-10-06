<template>
  <div>
    <header>
      <h1>Classes</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Class"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Class",
  data() {
    return {
      oldCode: `// Old JavaScript
var Animal = function (name, species) {
    this.name = name;
    this.species = species;
};
Animal.prototype.printInfo = function () {
    console.log(this.name + ' is a ' + this.species);
};

var myDog = new Animal('Skippy', 'Dog');
myDog.printInfo();
`,
      newCode: `class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    printInfo() {
        console.log(this.name + ' is a ' + this.species);
    }

    get info(){
      return this.name + ' is a ' + this.species;
    }
}

const myCat = new Animal('Mippy', 'Cat');
myCat.printInfo();
console.log(myCat.info);
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
