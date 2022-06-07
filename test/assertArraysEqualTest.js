const assertArraysEqual = require('../assertArraysEqual');
//No need to require eqArrays.

//Test cases.
console.log(assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); //Should pass.
console.log(assertArraysEqual(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "f"])); //Should fail.
console.log(assertArraysEqual([0, 0, 0, 0, 0], [0.0, 0.0, 0.0, 0.0, 0.0])); //Should pass.
console.log(assertArraysEqual([false, true], [true, false])); //Should fail.
console.log(assertArraysEqual([1, 2, 3], [1, 2])); //Should fail.