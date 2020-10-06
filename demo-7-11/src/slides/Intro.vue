<template>
  <div>
    <h1>
      <span>Beyond ES6 </span>
      <span class="smaller">New things in JavaScript</span>
    </h1>
    <span class="heart">JS</span>
    <div class="about-me">
      <homepage size="50px"/>
      <twitter size="50px"/>
    </div>
    <div class="info">
      <p>ctrl/cmd + ←↑↓→: to navigate</p>
      <p>ctrl/cmd + Enter: to run code</p>
      <p>ctrl/cmd + Alt: to reset code</p>
    </div>
  </div>
</template>

<script>
import Homepage from "@/asset-components/Homepage.vue";
import Twitter from "@/asset-components/Twitter.vue";

export default {
  name: "Intro",
  components: {
    Homepage,
    Twitter
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 7em;
  background: linear-gradient(
    60deg,
    #16c570 0%,
    #2091b1 37%,
    #2267a3 65%,
    #3d3393 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  transform: rotate(-5deg);
  margin-top: 0;
  padding-bottom: 10px;
}

h1 > span{
  display: block;
  text-align: center;
}

h1 > .smaller{
  font-size: 0.8em;
}

.about-me {
  position: absolute;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
}

.info {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 100px;
  bottom: 50px;
  background: #f7df1e;
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: -4px 4px 6px 0px #00000066;
}

.js {
  /*animation: 5s infinite beatHeart;*/
  position: absolute;
  top: 100px;
  left: 100px;
}

.heart {
  animation: 15s infinite beatHeart;
  position: absolute;
  top: 100px;
  left: 100px;
  width: 200px;
  height: 150px;
  font-size: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart:before,
.heart:after {
  position: absolute;
  z-index: -1;
  content: "";
  left: 100px;
  top: 0;
  width: 100px;
  height: 160px;
  background: #f7df1e;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}

.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

@keyframes beatHeart {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
