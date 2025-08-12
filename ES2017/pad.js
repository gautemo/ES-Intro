//ES8 has String padding
const text = 'hello'.padStart(9, '->').padEnd(13, '<-');
console.log(text);

//The first parameter, decides how long the string should be after
//the padded string is added. If the number is less than the string length,
//nothing is added. Second parameter is optional, as defines what should be padded. 
//Is empty space if not defines.