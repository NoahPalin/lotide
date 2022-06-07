const tail = require('../tail');
const assertEqual = require('../assertEqual');

//Test Case: Checks that the original array is unchanged.
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //No need to capture the return value since we are not checking it.
assertEqual(words.length, 3); //Original array should still have 3 elements!

//Test Case 2: Checks that the original array is unchanged.
const words2 = ["I", "hope", "you", "have", "a", "great", "day!"];
tail(words2);
assertEqual(words2.length, 7);