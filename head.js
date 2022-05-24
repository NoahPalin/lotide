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

/*This function takes in an array and returns to the user to first
element in that array (the element at index 0).
arr: Any 1D array.*/
const head = function(arr) {

  //Setting firstElm equal to the first element in the array (the head).
  let firstElm = arr[0];

  //Returns the first element in the array.
  return firstElm;
};

//Test cases.
assertEqual(head([5,6,7]), 5); //Should pass.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Should pass.
assertEqual(head([-9,-8,-6]), 9); //Should fail.

