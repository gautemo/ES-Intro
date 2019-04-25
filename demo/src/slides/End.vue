<template>
  <div>
    <end-text/>
    <div class="about-me">
      <homepage size="50px"/>
      <twitter size="50px"/>
    </div>
  </div>
</template>

<script>
import Homepage from "@/asset-components/Homepage.vue";
import Twitter from "@/asset-components/Twitter.vue";
import EndText from "@/asset-components/EndText.vue";

export default {
  name: "End",
  components: {
    Homepage,
    Twitter,
    EndText
  }
};
</script>

<style scoped>
.about-me {
  position: absolute;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
}
</style>
