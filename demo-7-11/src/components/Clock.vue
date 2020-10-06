<template>
  <div>{{hourC}}:{{minC}}</div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      hour: "",
      min: ""
    };
  },
  computed: {
    minC() {
      return this.min < 10 ? `0${this.min}` : this.min;
    },
    hourC() {
      return this.hour < 10 ? `0${this.hour}` : this.hour;
    }
  },
  mounted: function() {
    const setTime = () => {
      const now = new Date();
      this.hour = now.getHours();
      this.min = now.getMinutes();
    };
    setTime();
    setInterval(setTime, 10000);
  }
};
</script>

<style scoped>
div {
  font-size: 2em;
}
</style>
