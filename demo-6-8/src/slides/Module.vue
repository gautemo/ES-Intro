<template>
  <div>
    <header>
      <h1>Module</h1>
      <h2>ES6</h2>
    </header>
    <div class="grid">
      <div class="web">
        <h3>Web</h3>
        <div class="old">
          <p>&lt;script src="js/script1.js" &gt;&lt;/script &gt;</p>
          <p>&lt;script src="js/script2.js" &gt;&lt;/script &gt;</p>
          <p>&lt;script src="js/script3.js" &gt;&lt;/script &gt;</p>
        </div>
        <div class="new">
          <p>
            &lt;script
            <span class="highlight">type="module"</span> src="js/app.js"&gt;&lt;/script&gt;
          </p>
        </div>
      </div>
      <div class="node">
        <h3>Node</h3>
        <div class="old">
          <p>var something = require('js/script1.js');</p>
        </div>
      </div>
      <h2 class="grid-fill">New way with modules</h2>
      <div class="code">
        <h3>export</h3>
        <Code :code="exportc" :parent="`export`"/>
      </div>
      <div class="code">
        <h3>import</h3>
        <Code :code="importc" :parent="`import`"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Module",
  data() {
    return {
      exportc: `// objects, variables, classes, functions, ++ can be exported
const value1 = 10;
const value2 = 100;

//exports value1 and can be named anything
export default value1;

//exports multiple
export { value1, value2 };

//exports multiple and renames them
export { value1 as v1, value2 as v2 };

//exports multiple with a default
export { value1, value2 as default };

//re-export everything from another module
export * from 'other-module';
//re-export some components from another module
export { name1, name2 } from 'other-module';`,
      importc: `//imports default export, can be named anything. default export required in modules.js
import defaultThing from 'modules.js';

//imports every exports in a named variable
import * as values from 'modules.js';
console.log(values.value1);

//imports the exports we need. Names must match the exports
import { value1, value2 } from 'modules.js';

//imports can rename the variable name
import { value2 as v2 } from 'modules';`
    };
  },
  components: {
    Code: () => import("@/components/Code.vue")
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

.grid {
  display: grid;
  grid-template-columns: 50% 50%;
  flex: 1;
  overflow: auto;
}

.old,
.new {
  padding: 15px;
  border-radius: 5px;
  margin: 5px;
}

.web .old {
  background: #ff6961;
}

.node .old {
  background: #ff392e;
}

.new {
  background: #cafd96;
}

.highlight {
  background: #fafa2b;
}

.grid-fill {
  grid-column: 1 / -1;
}

.code {
  margin: 15px;
}
</style>
