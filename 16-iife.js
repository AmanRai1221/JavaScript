// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// Unnamed IIFE with parameters
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Aman')
