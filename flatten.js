const flatten = function(arr) {
  //initialize an empty array to hold the flatten array
  let runningArr = [];
  //loops through the whole array passed into this function
  for (let i = 0; i < arr.length; i++) {
    //an if statement to check if an element is an array (checks for nested arrays)
    if (Array.isArray(arr[i]) === true) {
      //loops through the whole nested array
      for (let j = 0; j < arr[i].length; j++) {
        //adds each element of the nested array to our running array
        runningArr.push(arr[i][j]);
      }
    }
    //if statement to check if an element isn't a nested array
    if (Array.isArray(arr[i]) === false) {
      //adds this element to our running array
      runningArr.push(arr[i]);
    }
  }
  return runningArr;
};

//this function only works if both arrays have the same length
const assertArraysEqual = function(arr1, arr2) {
  //this if statement checks if both arrays are the same length
  if (arr1.length !== arr2.length) {
    console.log(`Flattened Array: [${arr1}]`);
    console.log(`Expected Array:  [${arr2}]`);
    return "🔴🔴🔴the arrays are NOT equal.\n";
  }
  //for loop will loop through the entire array
  for (let i = 0; i < arr1.length; i++) {
    //checks if element i in both arrays do not equal
    if (arr1[i] !== arr2[i]) {
      //prints both arrays so the user can see what arrays they compared
      console.log(`Flattened Array: [${arr1}]`);
      console.log(`Expected Array:  [${arr2}]`);
      //if the if statement above was true, we return a fail message as the arrays are not equal
      return "🔴🔴🔴the arrays are NOT equal.\n";
    }
  }
  //prints both arrays so the user can see what arrays they compared
  console.log(`Flattened Array: [${arr1}]`);
  console.log(`Expected Array:  [${arr2}]`);
  //if each element in both arrays match and no different values are found,
  //then the arrays must be identical so we return a passing statement
  return "🟢🟢🟢the arrays are equal!\n";
};

//test cases
console.log(assertArraysEqual(flatten([1, [2, 3, 4], 5, [6, 7, 8], 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(assertArraysEqual(flatten(["how", ["are", "you", "doing"], "this", 'morning?']), ["how", "are", "you", "doing", "this", "morning?"]));
console.log(assertArraysEqual(flatten([-4, -3, [-2, -1], 0]), [-4, -3, -2, -1, 0]));


