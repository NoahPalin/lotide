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

/*This function takes in an array, finds the middle element, and then
returns it to the user.
arr: any 1D array.*/
const middle = function(arr) {

  //This variable is used to hold the middle element(s) of the passed-in array.
  let actualMiddle = [];

  //LocateMiddle is used to hold the index(s) of the middle element(s).
  let locateMiddle = [];
  locateMiddle.push(arr.length);

  //We check if the array has 1 or 2 elements, if so, there is no middle element.
  if (locateMiddle[0] === 1 || locateMiddle[0] === 2) {
    return "There is no middle to this array.";
  }

  //If the array has 0 elements, we return an empty array to the user.
  if (arr.length === 0) {
    return actualMiddle;
  }

  /*Checks if the passed-in array had an odd number of elements
  (if odd, there is only one middle element).*/
  if (locateMiddle[0] % 2 !== 0) {

    //We reassign locateMiddle to hold the index of the single middle element.
    locateMiddle[0] = locateMiddle[0] / 2 + 0.5;
  } else if (locateMiddle % 2 === 0) { //Checking if there is an even number of elements.

    //Give locateMiddle the index number of the two middle numbers from the passed-in array.
    locateMiddle[1] = locateMiddle[0] / 2;
    locateMiddle[2] = locateMiddle[0] / 2 + 1;

    //rRemoves the element that held the length of the passed-in array, as it is not needed anymore.
    locateMiddle.splice(0, 1);
  }
  
  //If there is only 1 middle number.
  if (locateMiddle.length === 1) {

    /*This captures the single middle number using the index we stored in locateMiddle.
    note: we had to subtract 1 from locateMiddle because we didn't actual hold the index
    of the middle element since arrays are indexed starting with 0, not 1.*/
    actualMiddle[0] = arr[locateMiddle[0] - 1];
    return actualMiddle;
  }
  if (locateMiddle.length === 2) {

    //Give actualMiddle the values of both middle numbers.
    actualMiddle[0] = arr[locateMiddle[0] - 1];
    actualMiddle[1] = arr[locateMiddle[1] - 1];
    return actualMiddle;
  }
};

//Test cases.s
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); //Should pass.
console.log(assertArraysEqual(middle(["hi", true, 99, 'm', 4.3, -5.8]), [true, 99])); //Should fail.
console.log(assertArraysEqual(middle([]), [])); //Should pass.
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); //Should pass.