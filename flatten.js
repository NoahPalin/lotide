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

/*This function will turn a 2D array into a 1D array.
arr: any 1D or 2D array.*/
const flatten = function(arr) {

  //Initialize an empty array to hold the flattened array.
  let runningArr = [];

  //Loops through the whole array passed into the function.
  for (let i = 0; i < arr.length; i++) {

    //An if statement to check if an element is an array (checks for 2D arrays).
    if (Array.isArray(arr[i]) === true) {

      //Loops through the whole 2D array.
      for (let j = 0; j < arr[i].length; j++) {

        //Adds each element of the 2D array to runningArr (the reuslt).
        runningArr.push(arr[i][j]);
      }
    }

    //An if statement to check if an element isn't a nested array.
    if (Array.isArray(arr[i]) === false) {

      //Adds this element to runningArr.
      runningArr.push(arr[i]);
    }
  }

  //Returns the final result.
  return runningArr;
};



//Test cases.
console.log(assertArraysEqual(flatten([1, [2, 3, 4], 5, [6, 7, 8], 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9])); //Should pass.
console.log(assertArraysEqual(flatten(["how", ["are", "you", "doing"], "this", 'morning?']), ["how", "are", "you", "doing", "this", "morning?"])); //Should pass.
console.log(assertArraysEqual(flatten([-4, -3, [-2, -1], 0]), [-4, -3, 2, -1, 0])); //Should fail.


