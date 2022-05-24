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

/*This function counts the number of each letter inside a string,
then returns the result as an object.
str: any string the user passes into the function.*/
const countLetters = function(str) {

  //Changes everything in the string to lowercase.
  str = str.toLowerCase();
  
  //Sets up an empty object to hold our final result.
  let result = {};
  
  /*Loops through the whole string and initializing each character in the
  string to have a value of 0 in the result object.*/
  for (let i = 0; i < str.length; i++) {
    result[str[i]] = 0;
  }

  /*loops through the string again, but now incrementing the character count
  in the result object.*/
  for (let j = 0; j < str.length; j++) {
    result[str[j]] ++;
  }

  //Removes the key that counted the spaces in the string.
  if (result[" "]) {
    delete result[" "];
  }
  return result;
};

/*Test case using assertEquals (note that I am just checking if countLetters
counted the letter h correctly). You can change this to different letters if desired.*/
let testAnswer = countLetters("lighthouse in the house");
testAnswer = testAnswer['h'];

/*note that the assertion will print "undefined === undefined" as we have not learned
how to properly use assertEquals to test with objects (this comes with a later assignment).*/
assertEqual(testAnswer['h']), 4; //Checks if countLetters found 4 h's.

//More test cases (not using assertEquals).
console.log(countLetters("hello")); //Should output {h: 1, e; 1, l: 2, o: 1}.
console.log(countLetters("ZZZXXP")); //Should output {z: 3, x; 2, p: 1}.
console.log(countLetters("LHL")); //Should output {l: 2, h; 1}.




