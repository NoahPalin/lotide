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

//this function takes in an array, finds the middle element and returns it to the user
const middle = function(arr) {
  //this variable is used to hold the middle element(s) of the passed-in array
  let actualMiddle = [];
  //locateMiddle is used to hold the index(s) of the middle element(s)
  let locateMiddle = [];
  locateMiddle.push(arr.length);
  //we check if the array has 1 or 2 elements, if so, there is no middle element
  if (locateMiddle[0] === 1 || locateMiddle[0] === 2) {
    return "There is no middle to this array.";
  }
  //if the array has 0 elements, we return an empty array
  if (arr.length === 0) {
    return actualMiddle;
  }

  //we check if the passed-in array had an odd number of elements (if it is odd, there is only one middle element)
  if (locateMiddle[0] % 2 !== 0) {
    //we reassign locateMiddle to hold the index of the single middle element
    locateMiddle[0] = locateMiddle[0] / 2 + 0.5;
  } else if (locateMiddle % 2 === 0) { //we are checking if there is an even number of elements
    //give locateMiddle the index number of the 2 middle numbers from the passed-in array
    locateMiddle[1] = locateMiddle[0] / 2;
    locateMiddle[2] = locateMiddle[0] / 2 + 1;
    //removes the element that held the length of the passed-in array, as we don't need it anymore
    locateMiddle.splice(0, 1);
  }
  
  //if there is only 1 middle number
  if (locateMiddle.length === 1) {
    //we capture the single middle number using the index we stored in locateMiddle.
    //note: we had to subtract 1 from locateMiddle because we didn't actual hold the index
    //of the middle element, as arrays are indexed starting with 0, not 1.
    actualMiddle[0] = arr[locateMiddle[0] - 1];
    return actualMiddle;
  }
  if (locateMiddle.length === 2) {
    //give actualMiddle the values of both middle numbers
    actualMiddle[0] = arr[locateMiddle[0] - 1];
    actualMiddle[1] = arr[locateMiddle[1] - 1];
    return actualMiddle;
  }
};

//test cases
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle(["hi", true, 99, 'm', 4.3, -5.8]), [99, 'm']));
console.log(assertArraysEqual(middle([]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));