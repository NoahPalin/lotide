const assert = require('chai').assert;
const tail   = require('../tail');

/*
//Test Case: Checks that the original array is unchanged.
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //No need to capture the return value since we are not checking it.
assertEqual(words.length, 3); //Original array should still have 3 elements!

//Test Case 2: Checks that the original array is unchanged.
const words2 = ["I", "hope", "you", "have", "a", "great", "day!"];
tail(words2);
assertEqual(words2.length, 7);
*/

describe("#tail", () => {
  it("Should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), [ 'Lighthouse', 'Labs' ]);
  });

  it("Should return [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]); 
  });

  it("Should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']); 
  });
});