<template>
  <div>
    <header>
      <h1>Promise Finally</h1>
      <h2>ES2018</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="PromiseFinally"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "PromiseFinally",
  data() {
    return {
      oldCode: `const promise = () => Promise.resolve(1);
promise()
  .then(data => console.log(data))
  .catch(error => console.log(error))`,
      newCode: `const promise = () => Promise.resolve(1);
promise()
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('finished'));
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
