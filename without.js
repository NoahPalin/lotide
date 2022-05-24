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

/*This function takes in an array and removes specific elements that the user specifies.
source: an array the user gives to the function (the original array).
itemsToRemove: the elements inside source that will be remooved by the function.
*/
const without = function(source, itemsToRemove) {

  /*Initializes an empty array to hold our final result.
  This is done so the original source array remains unchanged.*/
  let finalArr = [];

  //Adds each source element to the finalArr array.
  for (let k = 0; k < source.length; k++) {
    finalArr.push(source[k]);
  }

  //loops through the whole source array.
  for (let i = 0; i < source.length; i++) {

    //Loops through the array of items that are to be removed.
    for (let j = 0; j < itemsToRemove.length; j++) {

      //Checks if an element in finalArr matches an element that should be removed.
      if (itemsToRemove[j] === finalArr[i]) {

        //Removes that single element from the final array.
        finalArr.splice(i, 1);
      }
    }
  }

  //Returns the final result.
  return finalArr;
};

//The following lines of code are for testing.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // No need to capture return value for this test case.

//Checks the original array was not altered by the without function.
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"])); //Should pass.

//More test cases.
console.log(assertArraysEqual(without([1, 2, 3, 4, 5], [1, 2]), [3, 4, 5])); //Should pass.
console.log(assertArraysEqual(without(["one", 2, "three", 4, "five"], ["one", 4]), [2, "three", "five"])); //Should pass.
console.log(assertArraysEqual(without(["nice", "to", "meet", "you"], ["nice", "meet"]), ["nice", "you"])); //Should fail.
console.log(assertArraysEqual(without([7, 6.8, ""], [7, ""]), [7])); //Should fail.

