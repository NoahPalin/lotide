const without = function(source, itemsToRemove) {
  let finalArr = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        finalArr.splice(i, 1);
      }
    }
  }
  return finalArr;
};

//this function only works if both arrays have the same length
const assertArraysEqual = function(arr1, arr2) {
  //this if statement checks if both arrays are the same length
  if (arr1.length !== arr2.length) {
    console.log(`Array 1: [${arr1}]`);
    console.log(`Array 2: [${arr2}]`);
    return "🔴🔴🔴the arrays are NOT equal.\n";
  }
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


//lines 42 to 50 are for testing
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(assertArraysEqual(without([1, 2, 3, 4, 5], [1, 2]), [3, 4, 5]));
console.log(assertArraysEqual(without(["nice", "to", "meet", "you"], ["nice", "meet"]), ["nice", "you"]));
console.log(assertArraysEqual(without(["one", 2, "three", 4, "five"], ["one", 4]), [2, "three", "five"]));
console.log(assertArraysEqual(without([7, 6.8, ""], [7, ""]), [7]));
