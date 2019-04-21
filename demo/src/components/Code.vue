<template>
  <div class="cont">
    <codemirror ref="cm" class="code-container" v-model="cmCode" :options="opt"></codemirror>
    <transition name="fade">
      <div v-if="output.length > 0" class="output">
        <p
          :class="{ err: typeof o === 'string' && o.startsWith('error:') }"
          v-for="o of output"
          :key="o"
        >{{o}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/monokai.css";

export default {
  name: "Code",
  props: {
    code: String,
    parent: String
  },
  data() {
    return {
      opt: {
        mode: "text/javascript",
        lineNumbers: true,
        tabSize: 3,
        theme: "monokai",
        extraKeys: {
          "Ctrl-Enter": this.runCode,
          "Cmd-Enter": this.runCode,
          "Ctrl-Alt": () => (this.cmCode = this.code),
          "Cmd-Alt": () => (this.cmCode = this.code)
        }
      },
      cmCode: "",
      output: [],
      outputTimeout: null
    };
  },
  methods: {
    runCode: function() {
      clearTimeout(this.outputTimeout);
      const startFunc = `
      try{
      `;
      const endFunc = `
      }catch(error){
        component.output.push("error: " + error.message);
      }
      `;
      const manipCode = this.cmCode.replace(
        /console\.log\(/gi,
        "component.output.push("
      );
      try {
        this.output = [];
        const fun = new Function("component", startFunc + manipCode + endFunc);
        fun(this);
      } catch (error) {
        this.output.push("error: " + error.message);
      }
      this.outputTimeout = setTimeout(() => (this.output = []), 6000);
    }
  },
  created: function() {
    const sessionCode = sessionStorage.getItem(`cm${this.parent}`);
    this.cmCode = sessionCode ? sessionCode : this.code;
  },
  destroyed: function() {
    sessionStorage.setItem(`cm${this.parent}`, this.cmCode);
  },
  components: {
    codemirror
  }
};
</script>

<style>
.cont {
  height: 100%;
}
.code-container {
  height: 100%;
  border-radius: 12px;
  padding: 25px;
  box-sizing: border-box;
  background: #272822;
  box-shadow: -7px 7px 8px 1px rgba(0, 0, 0, 0.4);
}

.CodeMirror {
  font-size: 2.7em;
  height: 100%;
}

.CodeMirror-linenumber {
  padding-right: 30px;
}

.output {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  z-index: 55;
  font-size: 2.5em;
  pointer-events: none;
}

.multi-line .output p {
  white-space: pre-line;
}

.output p {
  padding: 10px 30px 10px 70px;
  margin: 0;
  background: rgba(255, 255, 0, 0.9);
  pointer-events: none;
}

.output p.err {
  background: rgb(219, 44, 21, 0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
