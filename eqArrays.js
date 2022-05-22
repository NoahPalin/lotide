const assertEqual = function(actual, expected) {
  //the message the assertion will output if it finds an error
  let errorMessage = `${actual} !== ${expected}`;
  //the following if statement adds the red circles if actual and expected don't match
  if (actual !== expected) {
    process.stdout.write("🔴🔴🔴");
  }
  console.assert(actual === expected, errorMessage);

  //if the assertion passes, this if statement prints a message telling the user it passed
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  //this if statement checks if both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //for loop will loop through the entire array
  for (let i = 0; i < arr1.length; i++) {
    //checks if element i in both arrays do not equal
    if (arr1[i] !== arr2[i]) {
      //if the if statement above was true, we return false as the arrays are not equal
      return false;
    }
  }
  //if each element in both arrays match and no different values are found,
  //then the arrays must be identical so we return true
  return true;
};

//test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["How", "are", "you", "today?"], ["How", "are", "you", "today?"]), true); // => should PASS
assertEqual(eqArrays([true, true, false], [true, true, false]), true); // => should PASS





