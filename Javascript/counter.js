// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/*
This code uses a closures: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. 
In this example, createCounter is a function that takes an initial value n as its argument and returns another function that acts as the counter. 
The counter function has a closure over the n variable, which means it can access and modify n even after createCounter has finished executing.
*/

var createCounter = function(n) {
    return function() {
        console.log(n++);
    };
};

const counter = createCounter(10)
counter()
counter()
counter()