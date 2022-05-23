const assertArraysEqual = function(arr1, arr2) {
  //checks if the arrays are equal using the eqArrays function
  if (!eqArrays(arr1, arr2)) {
    //prints both arrays so the user can see what arrays they compared
    console.log(`Array 1: [${arr1}]`);
    console.log(`Array 2: [${arr2}]`);
    //if the if statement above was true, we return a fail message as the arrays are not equal
    return "🔴🔴🔴the arrays are NOT equal.\n";
  }
  
  //checks if both arrays are equal using the eqArrays function
  if (eqArrays(arr1, arr2)) {
    //prints both arrays so the user can see what arrays they compared
    console.log(`Array 1: [${arr1}]`);
    console.log(`Array 2: [${arr2}]`);
    //if the above if statement was true, then return out pass messgae to the user
    return "🟢🟢🟢the arrays are equal!\n";
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

const letterPositions = function(sentence) {
  //changes everything to lowercase
  sentence = sentence.toLowerCase();

  //declares an empty object
  const results = {};

  //initializes an empty array in the results object that will hold the indices of each character
  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]] = [];
  }

  //adds the index of each letter to the correct key in our result object
  for (let j = 0; j < sentence.length; j++) {
    results[sentence[j]].push(j);
  }

  //an if statement to delete the key holding the indices of spaces
  if (results[" "]) {
    delete results[" "];
  }
  
  return results;
};

//test cases
console.log(assertArraysEqual(letterPositions("hello").e, [1]));//should pass
console.log(assertArraysEqual(letterPositions("nice to meet you!").o, [6, 14]));//should pass
console.log(assertArraysEqual(letterPositions("lighthouse labs").l, [0, 12]));//should fail
console.log(assertArraysEqual(letterPositions("computer").r, [8]));//should fail
