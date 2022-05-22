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

//this function will turn a 2D array into a 1D array
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



//test cases
console.log(assertArraysEqual(flatten([1, [2, 3, 4], 5, [6, 7, 8], 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(assertArraysEqual(flatten(["how", ["are", "you", "doing"], "this", 'morning?']), ["how", "are", "you", "doing", "this", "morning?"]));
console.log(assertArraysEqual(flatten([-4, -3, [-2, -1], 0]), [-4, -3, -2, -1, 0]));


