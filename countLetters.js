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

const countLetters = function(str) {
  //changes everything to lowercase
  str = str.toLowerCase();
  
  //sets up an empty object
  let result = {};
  
  /*loops through the whole string, initializing each character in the
  string to have a value of 0 in the result object*/
  for (let i = 0; i < str.length; i++) {
    result[str[i]] = 0;
  }
  /*loops through the string again, but now incrementing the character count
  in the result object*/
  for (let j = 0; j < str.length; j++) {
    result[str[j]] ++;
  }

  //removes the key that counted the spaces in the string
  if (result[" "]) {
    delete result[" "];
  }
  return result;
};

/*test case using assertEquals (note that I am just checking if countLetters
counted the letter h correctly). You can change this to different letters if desired*/
let testAnswer = countLetters("lighthouse in the house");
testAnswer = testAnswer['h'];
console.log(assertEqual(testAnswer['h']), 4); //checks if countLetters found 4 h's

//more test cases (not using assertEquals);
console.log(countLetters("hello")); //should output {h: 1, e; 1, l: 2, o: 1}
console.log(countLetters("ZZZXXP")); //should output {z: 3, x; 2, p: 1}
console.log(countLetters("LHL")); //should output {l: 2, h; 1}




