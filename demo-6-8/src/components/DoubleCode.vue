<template>
  <div>
    <transition name="up">
      <Code v-if="up" :code="codeUp" :parent="`${parent}up`"/>
    </transition>
    <transition name="down">
      <Code v-if="!up" :code="codeDown" :parent="`${parent}down`"/>
    </transition>
    <transition name="fade">
      <span v-if="!up" @click="up = true" class="go up">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </span>
    </transition>
    <transition name="fade">
      <span v-if="up" @click="up = false" class="go down">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
          <path fill="none" d="M0 0h24v24H0V0z"></path>
        </svg>
      </span>
    </transition>
  </div>
</template>

<script>
import Code from "@/components/Code.vue";

export default {
  name: "DoubleCode",
  data() {
    return {
      up: true
    };
  },
  methods: {
    keyCheck: function(e) {
      if (e.ctrlKey || e.metaKey) {
        if (e.keyCode === 38) {
          this.up = true;
        } else if (e.keyCode === 40) {
          this.up = false;
        }
      }
    }
  },
  mounted: function() {
    document.addEventListener("keydown", this.keyCheck);
  },
  destroyed: function() {
    document.removeEventListener("keydown", this.keyCheck);
  },
  props: {
    codeUp: String,
    codeDown: String,
    parent: String
  },
  components: {
    Code
  }
};
</script>

<style scoped>
.up-enter-active,
.up-leave-active,
.down-enter-active,
.down-leave-active {
  transition: all 1s ease-in-out;
}
.up-enter {
  transform: translateY(-900px);
  opacity: 0;
  position: absolute;
  width: 100%;
}
.up-leave-to {
  transform: translateY(-900px);
  opacity: 0;
  position: absolute;
  width: 100%;
}
.down-enter {
  transform: translateY(900px);
  opacity: 0;
  position: absolute;
  width: 100%;
}
.down-leave-to {
  transform: translateY(900px);
  opacity: 0;
  position: absolute;
  width: 100%;
}

.go {
  justify-content: center;
  width: 100%;
}

.up {
  top: 15px;
}

.down {
  bottom: -45px;
}
</style>
