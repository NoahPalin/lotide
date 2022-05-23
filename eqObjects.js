const assertEqual = function(actual, expected) {
  //the message the assertion will output if it finds an error
  let errorMessage = `${actual} !== ${expected}`;
  //the following if statement adds the red circles if actual and expected don't match
  if (actual !== expected) {
    process.stdout.write("🔴🔴🔴");
  }
  console.assert(actual === expected, errorMessage);

  //if the assertion passes, this if statement prints a message telling the user it passed
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  }
};

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


//all lines of code below are for testing purposes
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


let object1 = {
  key1: [10, 2],
  key2: 20,
  key3: 30
};
let object2 = {
  key1: [10,2],
  key2: 20,
  key3: 30
};
console.log(eqObjects(object1, object2)); // => true

let object3 = {
  key1: 'A',
  key2: 'B',
  key3: 'C'
};
let object4 = {
  key1: 'A',
  key2: 'B',
  key3: 'D'
};
console.log(eqObjects(object3, object4)); // => false

