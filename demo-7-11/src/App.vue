<template>
  <div id="app">
    <clock id="clock"/>
    <transition-group name="slide-fade" class="slides">
      <slide v-for="s in activeSlide" :key="s">
        <component :is="s"/>
      </slide>
    </transition-group>
    <transition name="fade">
      <span v-if="active > 0" @click="active--" class="go left">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </span>
    </transition>
    <transition name="fade">
      <span v-if="active < slides.length - 1" @click="active++" class="go right">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </span>
    </transition>
    <div class="progress" :style="{ width: `${(active+1) * 100 / slides.length }%` }"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      slides: [
        "intro",
        "Me",
        "evolve",
        "Es2016",
        "Includes",
        "Exponentiation",
        "Es2017",
        "AsyncAwait",
        "ValuesEntries",
        // "StringPad",
        "Es2018",
        "ObjectSpread",
        "ObjectDestructing",
        "PromiseFinally",
        "Es2019",
        "Flat",
        "FlatMap",
        // "FromEntries",
        "OptionalCatch",
        // "TrimStartEnd",
        "Es2020",
        "PromiseAllSettled",
        "BigInt",
        "NullishCoalescing",
        "OptionalChaining",
        "End"
      ],
      active: 0
    };
  },
  computed: {
    activeSlide: function() {
      return [this.slides[this.active]];
    }
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (e.ctrlKey || e.metaKey) {
        const appEl = document.querySelector("#app");
        if (e.keyCode === 39 && this.active < this.slides.length - 1) {
          // cmd + left arrow will return to last webpage by default, should be prevented
          e.preventDefault();
          appEl.style.setProperty("--slide-in", "300px");
          appEl.style.setProperty("--slide-out", "-300px");
          this.active++;
        } else if (e.keyCode === 37 && this.active > 0) {
          e.preventDefault();
          appEl.style.setProperty("--slide-in", "-300px");
          appEl.style.setProperty("--slide-out", "300px");
          this.active--;
        }
      }
    });
  },
  created: function() {
    const savedActive = sessionStorage.getItem("active");
    if (savedActive) {
      this.active = parseInt(savedActive);
    }
    window.addEventListener("beforeunload", () =>
      sessionStorage.setItem("active", this.active)
    );
  },
  components: {
    Slide: () => import("./components/Slide.vue"),
    Clock: () => import("./components/Clock.vue"),
    Intro: () => import("./slides/Intro.vue"),
    Me: () => import("./slides/Me.vue"),
    Es2016: () => import("./slides/Es2016.vue"),
    Es2017: () => import("./slides/Es2017.vue"),
    Es2018: () => import("./slides/Es2018.vue"),
    Es2019: () => import("./slides/Es2019.vue"),
    Es2020: () => import("./slides/Es2020.vue"),
    Evolve: () => import("./slides/Evolve.vue"),
    Includes: () => import("./slides/Includes.vue"),
    Exponentiation: () => import("./slides/Exponentiation.vue"),
    AsyncAwait: () => import("./slides/AsyncAwait.vue"),
    ValuesEntries: () => import("./slides/ValuesEntries.vue"),
    StringPad: () => import("./slides/StringPad.vue"),
    ObjectSpread: () => import("./slides/ObjectSpread.vue"),
    ObjectDestructing: () => import("./slides/ObjectDestructing.vue"),
    PromiseFinally: () => import("./slides/PromiseFinally.vue"),
    Flat: () => import("./slides/Flat.vue"),
    FlatMap: () => import("./slides/FlatMap.vue"),
    FromEntries: () => import("./slides/FromEntries.vue"),
    OptionalCatch: () => import("./slides/OptionalCatch.vue"),
    TrimStartEnd: () => import("./slides/TrimStartEnd.vue"),
    PromiseAllSettled: () => import("./slides/PromiseAllSettled.vue"),
    BigInt: () => import("./slides/BigInt.vue"),
    NullishCoalescing: () => import("./slides/NullishCoalescing.vue"),
    OptionalChaining: () => import("./slides/OptionalChaining.vue"),
    End: () => import("./slides/End.vue"),
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Baloo+Chettan");

body {
  margin: 0;
  font-family: "Baloo Chettan", cursive;
}
#app {
  --slide-in: 300px;
  --slide-out: -300px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

#clock {
  position: absolute;
  top: 10px;
  right: 10px;
}

.slides {
  display: flex;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.7s ease-in-out;
}
.slides > .slide-fade-enter {
  transform: translateX(var(--slide-in));
  opacity: 0;
  position: absolute;
}
.slides > .slide-fade-leave-to {
  transform: translateX(var(--slide-out));
  opacity: 0;
  position: absolute;
}

.go {
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;
}

.go:hover {
  opacity: 1;
}

.left {
  left: 15px;
}

.right {
  right: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.progress {
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: orangered;
  box-shadow: 0 0 10px orangered;
  transition: width 0.4s ease-in-out;
}
</style>
