<template>
  <div class="wavetext">
    <span v-for="(t, i) in textArr" :key="i" :style="w(i)">{{t}}</span>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      text: "The End... Thank You For Listening!"
    };
  },
  computed: {
    textArr() {
      return [...this.text];
    }
  },
  methods: {
    w: function(i) {
      return {
        "animation-delay": "-" + ((40 - i) * 2 * 2.5) / 40 + "s",
        color: `rgba(${100 + ((i * 20) % 155)}, 10, ${100 +
          ((i * 40) % 55)}, 1)`
      };
    }
  }
};
</script>

<style scoped>
@keyframes wave {
  from {
    transform: translateY(0);
    color: white;
  }
  to {
    transform: translateY(-90px);
  }
}

.wavetext {
  padding-top: 100px;
  text-align: center;
}

.wavetext span {
  display: inline-block;
  font-size: 70px;
  white-space: pre-wrap;

  animation-duration: 2.5s;
  animation-name: wave;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
