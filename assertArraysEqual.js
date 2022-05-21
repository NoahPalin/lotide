//this function only works if both arrays have the same length
const eqArraysEqual = function(arr1, arr2) {
  //for loop will loop through the entire array
  for (let i = 0; i < arr1.length; i++) {
    //checks if element i in both arrays do not equal
    if (arr1[i] !== arr2[i]) {
      //prints both arrays so the user can see what arrays they compared
      console.log(`Array 1: [${arr1}]`);
      console.log(`Array 2: [${arr2}]`);
      //if the if statement above was true, we return a fail message as the arrays are not equal
      return "🔴🔴🔴the arrays are NOT equal.\n";
    }
  }
  //prints both arrays so the user can see what arrays they compared
  console.log(`Array 1: [${arr1}]`);
  console.log(`Array 2: [${arr2}]`);
  //if each element in both arrays match and no different values are found,
  //then the arrays must be identical so we return a passing statement
  return "🟢🟢🟢the arrays are equal!\n";
};

//test cases
console.log(eqArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(eqArraysEqual(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "f"]));
console.log(eqArraysEqual([0, 0, 0, 0, 0], [0.0, 0.0, 0.0, 0.0, 0.0]));
console.log(eqArraysEqual([false, true], [true, false]));
