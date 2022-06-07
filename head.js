const assertEqual = require('./assertEqual')

/*This function takes in an array and returns to the user to first
element in that array (the element at index 0).
arr: Any 1D array.*/
const head = function(arr) {

  //Setting firstElm equal to the first element in the array (the head).
  let firstElm = arr[0];

  //Returns the first element in the array.
  return firstElm;
};

module.exports = head;



