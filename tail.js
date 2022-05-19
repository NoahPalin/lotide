const assertEqual = function(actual, expected) {
  let errorMessage = `${actual} !== ${expected}`;
  if (actual !== expected) {
    process.stdout.write("🔴🔴🔴");
  }
  console.assert(actual === expected, errorMessage);
  
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  }
};
  
let tail = function(arr) {
  //we make a new array and set it equal to our original array, expect the new one doesn't-
  //include the first element (i.e. we have the tail)
  let newArr = arr.slice(1);
  return newArr;
};

//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
