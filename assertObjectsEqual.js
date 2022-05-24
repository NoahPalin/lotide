// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  //check if both obejcts have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //create an array containing each key from both objects and sorts them alphabetically
  let keyList1 = Object.keys(object1).sort();
  let keyList2 = Object.keys(object2).sort();

  //a for loop to loop through the entire list (an array) of keys
  for (let i = 0; i < keyList1.length; i++) {

    //if a value in an object is an array
    if (Array.isArray(object1[keyList1[i]])) {

      //we call eqArrays to test if both arrays are equal, if not, return false
      if (!eqArrays(object1[keyList1[i]], object2[keyList2[i]])) {
        return false;
      }
    } else if (keyList1[i] !== keyList2[i]) {//checks if both objects have the same keys
      return false;
    } else if (object1[keyList1[i]] !== object2[keyList2[i]]) {//checks if each value of each key are the same in both objects
      return false;
    }
  }

  //we return true if all the above tests have not found any inconsistencies between both objects
  return true;
};

//this function is used for testing if 2 arrays are equal when the array is a value in an object
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

//allows for the testing of objects and also shows what objects they compared
const assertObjectsEqual = function(obj1, obj2) {
  
  //this line allows the printing of the objects later in the program
  const inspect = require('util').inspect;
  
  //compares both objects using eqObjects, if they are NOT the same, a fail message is returned
  if (!eqObjects(obj1, obj2)) {

    //prints both objects so the user can see what objects are compared
    console.log(`Object 1: [${inspect(obj1)}]`);
    console.log(`Object 2: [${inspect(obj2)}]`);

    //if the if statement above was true, we return a fail message as the objects are not equal
    return "🔴🔴🔴the objects are NOT equal.\n";
  }
  
  //checks if both objects are equal using the eqObjects function, if they are equal, returns a passing message
  if (eqObjects(obj1, obj2)) {

    //prints both objects so the user can see what objects they compared
    console.log(`Object 1: [${inspect(obj1)}]`);
    console.log(`Object 2: [${inspect(obj2)}]`);

    //if the above if statement was true, then we returns the pass messgae to the user
    return "🟢🟢🟢the objects are equal!\n";
  }
};

//test cases
console.log(assertObjectsEqual({a: 1, b: 2, c: [3, 4], d: "hi"}, {a: 1, b: 2, c: [3, 4], d: "hi"})); //should pass
console.log(assertObjectsEqual({a: 1, b: 2}, {a: 1, c: 2})); //should fail
console.log(assertObjectsEqual({a: "Lighthouse", b: "Labs"}, {b: "Labs", a: "Lighthouse"})); //should pass
console.log(assertObjectsEqual({a: " "}, {})); //should fail

