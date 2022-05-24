/* This function compares two primitive pieces of data, then tells the user
if they are equal or not with a pass/fail message.
actual: the data you want to compare to another piece of data.
expected: what you expect actual to be equal to. */
const assertEqual = function(actual, expected) {

  //The message the assertion will output if it finds an error.
  let errorMessage = `${actual} !== ${expected}`;

  //The following if statement adds the red circles if actual and expected don't match.
  if (actual !== expected) {

    //The red circles are logged without going to a new line.
    process.stdout.write("🔴🔴🔴");
  }
  console.assert(actual === expected, errorMessage);

  //If the assertion passes, this if statement prints a message telling the user it passed.
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  }
};

/*This function returns every element of an array expect the first one.
arr: an array that is passed into the tail function.*/
let tail = function(arr) {

  //This line makes a new array and sets it equal to our original array, expect the new one
  //doesn't include the first element (i.e. we have the tail of the array).
  let newArr = arr.slice(1);

  //Returns the tail.
  return newArr;
};

//Test Case: Checks that the original array is unchanged.
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //No need to capture the return value since we are not checking it.
assertEqual(words.length, 3); //Original array should still have 3 elements!

//Test Case 2: Checks that the original array is unchanged.
const words2 = ["I", "hope", "you", "have", "a", "great", "day!"];
tail(words2);
assertEqual(words2.length, 7);