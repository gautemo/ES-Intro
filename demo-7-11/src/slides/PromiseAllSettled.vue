<template>
  <div>
    <header>
      <h1>Promise.allSettled</h1>
      <h2>ES2020</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="PromiseAllSettled"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "PromiseAllSettled",
  data() {
    return {
      oldCode: `const example = async () => {
  const promises = [Promise.resolve(1), Promise.reject(-1)];

  try{
    const [r1, r2] = await Promise.all(promises);
    console.log(r1, r2);
  }catch{
    console.log('😥');
  }
}
example();
`,
      newCode: `const example = async () => {
  const promises = [Promise.resolve(1), Promise.reject(-1)];

  const [r1, r2] = await Promise.allSettled(promises);
  console.log(r1, r2);
}
example();`
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
