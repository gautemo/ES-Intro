<template>
  <div>
    <header>
      <h1>Rest Params</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="RestParams"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "RestParams",
  data() {
    return {
      oldCode: `//old way
function func() {
    console.log(arguments[3]);
}
func(1, 2, 3, "abc", { age: 100 });
`,
      newCode: `function func(param1, ...params) { //rest parameters always need to be last
    console.log(params);
}
func(1, 2, 3, "abc", { age: 100 });

function sum(...params) {
    console.log(params.reduce((t,n) => t += n));
}
sum(1, 2, 3);
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
