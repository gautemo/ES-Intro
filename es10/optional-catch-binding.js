const nothing = null;

//Old JavaScript
try {
    nothing.do();
} catch (error) { //you needed (error) even though you didn't use it
    console.log('woopsie');
}

//ES10
try {
    nothing.do();
} catch {
    console.log('woopsie');
}