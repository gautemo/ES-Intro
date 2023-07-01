#!/usr/bin/env node

/**
 * Hashbang/Shebangs are used to point to which binary that should run the script when the file is executable.
 * Meaning you can add e.g. "#!/usr/bin/env node" or "#!/usr/bin/env -S deno run" 
 * as the first line and run the file without specifying the runtime.
 * > ./hashbang.js
 * This is for Linux and Mac.
 * 
 * ES2023 makes engines ignore leading hashbangs in source text so runtimes don't have to.
 *  */ 

console.log('👋')