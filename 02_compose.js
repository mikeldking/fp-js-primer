#!/usr/bin/env

// Functions that only take one parameter are called unary functions

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

// We can now re-use these functions by writing e(f(g(x)))
console.log(
    addExclamation(capitalize(addExcitement("I'm going to Disneyland")))
);

// We cant to write (e ∘ f ∘ g )(x)
const identity = (x) => x;
function compose(...fns) {
    return fns.reverse().reduce((acc, fn) => {
        return (x) => {
            return fn(acc(x));
        };
    }, identity);
}

const addHype = compose(addExclamation, capitalize, addExcitement);

console.log(addHype("I'm going to Disneyland"));
