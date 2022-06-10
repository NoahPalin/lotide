/*This function takes in an array of numbers, finds the middle element, and then
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

module.exports = middle;