<template>
  <div>
    <header>
      <h1>Optional Catch</h1>
      <h2>ES2019</h2>
    </header>
    <DoubleCode class="code" :codeUp="oldCode" :codeDown="newCode" parent="OptionalCatch"/>
  </div>
</template>

<script>
import DoubleCode from "@/components/DoubleCode.vue";

export default {
  name: "OptionalCatch",
  data() {
    return {
      oldCode: `try {
  throw new Error('🤬');
} catch (error) {
  console.log('woopsie');
}`,
      newCode: `try {
  throw new Error('🤬');
} catch {
  console.log('woopsie');
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
