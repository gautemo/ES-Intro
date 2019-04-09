<template>
  <div>
    <h1>let &amp; const</h1>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="LetConst"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "LetConst",
  data() {
    return {
      oldCode: `//Old JavaScript
var boys = 5;
var boys = 20;
if(true){
    var girls = 10;
}
var humans = boys + girls;
console.log(humans);
`,
      newCode: `let a = 4;`
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
