/* ES6 Modules. Note: this code will not be runable, just a read through file */

//Old JavaScript needed to include JavaScript files this way in the html.
//Giving the html file the responsibility to load what is required and not in the js files
//<script src="js/script1.js"></script>
//<script src="js/script2.js"></script>
//<script src="js/script3.js"></script>

//Old way in Node
var something = require('js/script1.js');

//ES6 modules
//The html file needs type="module" to allow the js file to use export and import
//<script type="module" src="js/app.js"></script>

/*Export variants*/
// objects, variables, classes, functions, ++ can be exported
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
export { name1, name2 } from 'other-module';

/*Import variants*/

//imports default export, can be named anything. default export required in modules.js
import defaultThing from 'modules.js';

//imports every exports in a named variable
import * as values from 'modules.js';
console.log(values.value1);

//imports the exports we need. Names must match the exports
import { value1, value2 } from 'modules.js';

//imports can rename the variable name
import { value2 as v2 } from 'modules';

