const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Test cases.
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); //Should pass.
console.log(assertArraysEqual(middle(["hi", true, 99, 'm', 4.3, -5.8]), [true, 99])); //Should fail.
console.log(assertArraysEqual(middle([]), [])); //Should pass.
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); //Should pass.