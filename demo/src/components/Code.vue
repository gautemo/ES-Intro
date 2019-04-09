<template>
  <div class="cont">
    <codemirror ref="cm" class="code-container" v-model="cmCode" :options="opt"></codemirror>
    <p v-if="output" class="output">{{output}}</p>
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
      output: ""
    };
  },
  methods: {
    runCode: function() {
      const manipCode = this.cmCode.replace(
        /console\.log\(/gi,
        "sessionStorage.setItem('runCodeOutput',"
      );
      const fun = new Function(manipCode);
      fun();
      this.addOutput();
    },
    addOutput: function() {
      this.output = sessionStorage.getItem("runCodeOutput");
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
  background: rgba(255, 255, 0, 0.8);
  z-index: 55;
  font-size: 2em;
  padding: 15px;
}
</style>
