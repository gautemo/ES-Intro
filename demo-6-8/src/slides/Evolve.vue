<template>
  <div>
    <div class="grid">
      <h3>Year</h3>
      <h3>Name</h3>
      <h3>Edition</h3>
      <h3>Community Name</h3>
      <h3>New Official Name</h3>

      <p :class="{ current: count === 0}">1997</p>
      <p :class="{ current: count === 0}">ECMAScript</p>
      <p></p>
      <p></p>
      <p></p>

      <p v-if="count > 0" :class="{ current: count === 1}">1998</p>
      <p v-if="count > 0" :class="{ current: count === 1}">ECMAScript</p>
      <p v-if="count > 0" :class="{ current: count === 1}">2</p>
      <p v-if="count > 0"></p>
      <p v-if="count > 0"></p>

      <p v-if="count > 1" :class="{ current: count === 2}">1999</p>
      <p v-if="count > 1" :class="{ current: count === 2}">ECMAScript</p>
      <p v-if="count > 1" :class="{ current: count === 2}">3</p>
      <p v-if="count > 1" :class="{ current: count === 2}">ES3</p>
      <p v-if="count > 1"></p>

      <p v-if="count > 2" :class="{ hide: count === 3, current: count === 4}">Abandond</p>
      <p v-if="count > 2" :class="{ current: count <5 && count > 2}">ECMAScript</p>
      <p v-if="count > 2" :class="{ current: count <5 && count > 2}">4</p>
      <p v-if="count > 2" :class="{ current: count <5 && count > 2}">ES4</p>
      <p v-if="count > 2"></p>

      <p v-if="count > 4" :class="{ current: count === 5}">2009</p>
      <p v-if="count > 4" :class="{ current: count === 5}">ECMAScript</p>
      <p v-if="count > 4" :class="{ current: count === 5}">5</p>
      <p v-if="count > 4" :class="{ current: count === 5}">ES5</p>
      <p v-if="count > 4"></p>

      <p v-if="count > 5" :class="{ current: count === 6}">2011</p>
      <p v-if="count > 5" :class="{ current: count === 6}">ECMAScript</p>
      <p v-if="count > 5" :class="{ current: count === 6}">5.1</p>
      <p v-if="count > 5" :class="{ current: count === 6}">?</p>
      <p v-if="count > 5"></p>

      <p v-if="count > 6" :class="{ current: count === 7}">2015</p>
      <p v-if="count > 6" :class="{ current: count === 7}">ECMAScript</p>
      <p v-if="count > 6" :class="{ current: count === 7}">6</p>
      <p v-if="count > 6" :class="{ current: count === 7}">ES6</p>
      <p v-if="count > 6" :class="{ current: count === 7}">ES2015</p>

      <p v-if="count > 7" :class="{ current: count === 8}">2016</p>
      <p v-if="count > 7" :class="{ current: count === 8}">ECMAScript</p>
      <p v-if="count > 7" :class="{ current: count === 8}">7</p>
      <p v-if="count > 7" :class="{ current: count === 8}">ES7</p>
      <p v-if="count > 7" :class="{ current: count === 8}">ES2016</p>

      <p v-if="count > 8" :class="{ current: count === 9}">2017</p>
      <p v-if="count > 8" :class="{ current: count === 9}">ECMAScript</p>
      <p v-if="count > 8" :class="{ current: count === 9}">8</p>
      <p v-if="count > 8" :class="{ current: count === 9}">ES8</p>
      <p v-if="count > 8" :class="{ current: count === 9}">ES2017</p>

      <p v-if="count > 9" :class="{ current: count === 10}">2018</p>
      <p v-if="count > 9" :class="{ current: count === 10}">ECMAScript</p>
      <p v-if="count > 9" :class="{ current: count === 10}">9</p>
      <p v-if="count > 9" :class="{ current: count === 10}">ES9</p>
      <p v-if="count > 9" :class="{ current: count === 10}">ES2018</p>

      <p v-if="count > 10" :class="{ current: count === 11}">🧙</p>
      <p v-if="count > 10" :class="{ current: count === 11}">🤖</p>
      <p v-if="count > 10" :class="{ current: count === 11}">⏬</p>
      <p v-if="count > 10" :class="{ current: count === 11}">👾</p>
      <p v-if="count > 10" :class="{ current: count === 11}">🧚</p>

      <p v-if="count > 10" :class="{ current: count === 11}">Future</p>
      <p v-if="count > 10" :class="{ current: count === 11}"></p>
      <p v-if="count > 10" :class="{ current: count === 11}"></p>
      <p v-if="count > 10" :class="{ current: count === 11}">ESNext</p>
      <p v-if="count > 10" :class="{ current: count === 11}">ESNext</p>
    </div>
    <span v-if="count === 4" class="anim bomb1">💢</span>
    <span v-if="count === 4" class="anim bomb2">💣</span>
    <span v-if="count === 4" class="anim bomb3">💥</span>
    <span v-if="count === 7" class="anim bulb">🕯💡</span>
    <div class="info" v-if="count === 0">
      <p>↑↓: to show more</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Evolve",
  data() {
    return {
      count: 0
    };
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 40 && this.count < 11) {
        this.count++;
      } else if (e.keyCode === 38 && this.count > 0) {
        this.count--;
      }
    });
  },
  created: function() {
    const count = sessionStorage.getItem("evolve-count");
    if (count) {
      this.count = parseInt(count);
    }
  },
  destroyed: function() {
    sessionStorage.setItem("evolve-count", this.count);
  }
};
</script>

<style scoped>
h3 {
  text-decoration: underline;
}
.grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr 1fr 1fr;
  grid-gap: 20px;
}

.hide {
  visibility: hidden;
}

.current {
  font-size: 2em;
  color: rgb(94, 0, 94);
}

p {
  margin: 5px;
}

.anim {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;
}

.bomb1 {
  animation: bang 0.3s forwards;
}

.bomb2 {
  animation: bang 0.3s 0.3s forwards;
}

.bomb3 {
  animation: bang 0.3s 0.6s forwards;
}

.bulb {
  animation: bang 1s forwards;
}

@keyframes bang {
  0% {
    font-size: 5em;
  }
  90% {
    font-size: 8em;
  }
  99% {
    font-size: 7em;
  }
  100% {
    font-size: 0;
  }
}

p {
  opacity: 0;
  animation: fadein 0.7s ease-in-out forwards;
  transition: font-size 0.3s ease-in-out;
}

@keyframes fadein {
  100% {
    opacity: 1;
  }
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
</style>
