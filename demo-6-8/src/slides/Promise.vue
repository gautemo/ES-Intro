<template>
  <div>
    <header>
      <h1>Promise</h1>
      <h2>ES6</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="Promise"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "Promise",
  data() {
    return {
      oldCode: `// Old JavaScript needed callback functions if waiting for methods
function getDataFromNetwork(callback) {
    //pretend network call
    callback();
}

function onDone() {
    console.log('Finally!');
}

getDataFromNetwork(onDone);
`,
      newCode: `function getDataFromNetwork() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function onDone() {
    console.log('Finally!');
}

getDataFromNetwork()
    .then(onDone); 
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
