const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//Test cases.
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["How", "are", "you", "today?"], ["How", "are", "you", "today?"]), true); // => should PASS
assertEqual(eqArrays([true, true, false], [true, true, false]), true); // => should PASS