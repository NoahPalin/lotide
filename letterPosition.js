/*This function uses the function eqArrays to check if two arrays are equal
to eachother and outputs a pass or fail message.
arr1: an array you want to compare.
arr2: another array you want to compare to arr1.*/
const assertArraysEqual = function(arr1, arr2) {

  //Checks if the arrays are equal using the eqArrays function.
  if (!eqArrays(arr1, arr2)) {

    //Prints both arrays so that the user can see what arrays they compared.
    console.log(`Array 1: [${arr1}]`);
    console.log(`Array 2: [${arr2}]`);

    //If the if statement above was true, we return a fail message as the arrays are not equal.
    return "🔴🔴🔴the arrays are NOT equal.\n";
  }
  
  //Checks if both arrays are equal using the eqArrays function.
  if (eqArrays(arr1, arr2)) {

    //Prints both arrays so the user can see what arrays they compared.
    console.log(`Array 1: [${arr1}]`);
    console.log(`Array 2: [${arr2}]`);

    //If the above if statement was true, then return our pass messgae to the user.
    return "🟢🟢🟢the arrays are equal!\n";
  }
};

/*This function compares two arrays and checks if they are identical.
arr1: the first array you pass into the function, it will be compared to arr2.
arr2: the second array you pass into the function.*/
const eqArrays = function(arr1, arr2) {

  //This if statement checks if both arrays are the same length.
  if (arr1.length !== arr2.length) {
    return false;
  }

  //This for loop will loop through the entire array.
  for (let i = 0; i < arr1.length; i++) {

    //Checks if element i in both arrays do not equal.
    if (arr1[i] !== arr2[i]) {

      //If the if statement above was true, we return false as the arrays are not equal.
      return false;
    }
  }

  /*If each element in both arrays match and no different values are found,
  then the arrays must be identical so we return true.*/
  return true;
};

/*This function takes in a string and returns an object with the
indices of each latter in the passed-in string.
sentence: a string that you pass into the function.*/
const letterPositions = function(sentence) {

  //Changes all the characters to lowercase.
  sentence = sentence.toLowerCase();

  //Declares an empty object that will hold our results.
  const results = {};

  //Initializes an empty array in the results object that will hold the indices of each character.
  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]] = [];
  }

  //Adds the index of each letter to the correct key in the result object.
  for (let j = 0; j < sentence.length; j++) {
    results[sentence[j]].push(j);
  }

  //An if statement to delete the key holding the indices of spaces (if there are any spaces).
  if (results[" "]) {
    delete results[" "];
  }
  
  //Returns our final results.
  return results;
};

//Test cases.
console.log(assertArraysEqual(letterPositions("hello").e, [1])); //Should pass.
console.log(assertArraysEqual(letterPositions("nice to meet you!").o, [6, 14])); //should pass.
console.log(assertArraysEqual(letterPositions("lighthouse labs").l, [0, 12])); //Should fail.
console.log(assertArraysEqual(letterPositions("computer").r, [8])); //Should fail.
