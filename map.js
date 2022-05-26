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

/*This function replicates the built-in .map function. It applies a function to each element inside an array
array: an array of strings.
callback: a callback function that does an operation on each element of the passed-in array.*/
const map = function(array, callback) {

  //Initializes an empty array to hold the results.
  const results = [];

  //Loops through each element in the passed-in array.
  for (let item of array) {

    //Uses a callback function to get the first element in the array, and pushes that character to results.
    results.push(callback(item));
  }

  //Returns the final array.
  return results;
};

//Test cases.
const words1 = ["ground", "control", "to", "major", "tom"];
console.log(assertArraysEqual(map(words1, word => word[0]), ['g', 'c', 't', 'm', 't'])); //Should pass.

const words2 = ["have", "a", "good", "day!"];
console.log(assertArraysEqual(map(words2, word => word[0]), ['h', 'a', 'g', 'd'])); //Should pass.

const words3 = ["May", "26th", "2022"];
console.log(assertArraysEqual(map(words3, word => word[0]), ['M', '2', '0'])); //Should fail.

const words4 = ["Mars", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log(assertArraysEqual(map(words4, word => word[0]), ['M', 'V', 'E', 'M', 'J', 'S', 'U', 'N', 'P'])); //Should fail.



