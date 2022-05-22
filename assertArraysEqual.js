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

//test cases
console.log(assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(assertArraysEqual(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "f"]));
console.log(assertArraysEqual([0, 0, 0, 0, 0], [0.0, 0.0, 0.0, 0.0, 0.0]));
console.log(assertArraysEqual([false, true], [true, false]));
console.log(assertArraysEqual([1, 2, 3], [1, 2]));