#!/usr/bin/env

// Last lessen we learned how to compose functions that took in a single parameter
// This looks awfully similar to something we are already familiar with.
// Array.prototype.map!

function capitalize(str) {
    return str.toUpperCase();
}

function addExcitement(str) {
    return str
        .split(" ")
        .map((s, idx) => {
            if (idx === 0) {
                return s + " flippin'";
            }
            return s;
        })
        .join(" ");
}

function addExclamation(str) {
    return str + "!!!";
}

console.log(
    ["I'm going to disney land"]
        .map(capitalize)
        .map(addExcitement)
        .map(addExclamation)
);

// We could say that the array forms a "box" around a state
// that lets you compose functions

const Box = (x) => ({
    map: (f) => Box(f(x)),
    inspect: () => `Box(${x})`,
    fold: (f) => f(x),
});

console.log(
    Box("I'm going to disney land")
        .map(capitalize)
        .map(addExcitement)
        .map(addExclamation)
);

// So we can see that map is not about iterating over lists but actually about composition within a context
// Box is the identity functor

// Objects that implement `map` are called functors
// Box and Arrays are functors
// Other things that are functors: Bluebird promises, streams, trees
// Ex: https://baconjs.github.io/api2.html#stream-map
