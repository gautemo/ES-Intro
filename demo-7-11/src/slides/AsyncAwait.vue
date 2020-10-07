<template>
  <div>
    <header>
      <h1>async &amp; await</h1>
      <h2>ES2017</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="AsyncAwait"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "AsyncAwait",
  data() {
    return {
      oldCode: `const promise = () => Promise.resolve(1);

function call(){
  promise()
    .then(res => console.log(res));
}
call();
`,
      newCode: `const promise = () => Promise.resolve(1);

async function asyncCall() {
    const res = await promise();
    console.log(res);
}

asyncCall();

//With arrow functions
const asyncArrow = async () => {
    const res = await promise();
    console.log(res);
}

//If function contains multiple awaits that don't depend on each other, 
//this is unnecicary waiting
const multipleAwaits = async () => {
    const res1 = await promise();
    const res2 = await promise();
    console.log(res1, res2); //Output: hi, hi
}
multipleAwaits();

//Two better aproaches
const multipleAwaits2 = async () => {
    //start methods right away, and use await before using the result
    const res1 = promise();
    const res2 = promise();
    console.log(await res1, await res2); //Output: hi, hi
}
multipleAwaits2();

const multipleAwaits3 = async () => {
    //Use Promise.all, 
    //which takes in an array of promises and returns their result in an array
    const res = await Promise.all([promise(), promise()]);
    console.log(res); //Output: [ 'hi', 'hi' ]
}
multipleAwaits3();
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
  overflow: auto;
}
</style>
