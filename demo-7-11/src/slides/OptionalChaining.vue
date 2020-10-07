<template>
  <div>
    <header>
      <h1>Optional Chaining</h1>
      <h2>ES2020</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="OptionalChaining"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "OptionalChaining",
  data() {
    return {
      oldCode: `const house = { owner: { name: 'Jim', pet: null }};

if(house && house.owner && house.owner.pet && house.owner.pet.type === 'dog'){
  console.log('owner has a dog');
}else{
  console.log('no dog here');
}
`,
      newCode: `if (house?.owner?.pet?.type === 'dog') {
  console.log('owner has a dog');
}else{
  console.log('no dog here');
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
