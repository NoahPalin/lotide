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

/*This function creates a new array from elements in a passed-in array. It pushes elements
to the new array until an element meets a specified condition.
array: an array that is passed-in to the function.
callback: a function that is used to test if an element should be pushed into the new array.*/
const takeUntil = function(array, callback) {

  //Initializes an empty array to hold our results.
  const results = [];

  //Loops through the entire passed-in array.
  for (let x of array) {

    //If the callback function returns a falsy value, we push the element to our results array.
    if (!callback(x)) {
      results.push(x);
    }

    //If the callback function returns a truthy value, we return the results array.
    if (callback(x)) {
      return results;
    }
  }
};


//Test cases.
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])); //Should pass.

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood'])); //Should pass.

const data3 = ["Mars", "Venus", "Earth", "Mercury", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log(assertArraysEqual(takeUntil(data3, x => x.length >= 7), ["Mars", "Venus", "Earth", "Mercury"])); //Should fail.

const data4 = [-5, -4, -3, -2, -1, 0, 1, 2, 3];
console.log(assertArraysEqual(takeUntil(data4, x => x >= 0), [-5, -4, -3, -2, -1, 0])); //Should fail.



