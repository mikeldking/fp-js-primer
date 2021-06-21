#!/usr/bin/env

// Instead of writing f(x, y), we can write f(x)(y)
const add = (x) => (y) => {
    return x + y;
};

const plusTwo = add(2);

// We can now re-use this function
console.log(plusTwo(5));
