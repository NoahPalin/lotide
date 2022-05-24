/* This function compares two primitive pieces of data, then tells the user
if they are equal or not with a pass/fail message.
actual: the data you want to compare to another piece of data.
expected: what you expect actual to be equal to. */
const assertEqual = function(actual, expected) {

  //The message the assertion will output if it finds an error.
  let errorMessage = `${actual} !== ${expected}`;

  //The following if statement adds the red circles if actual and expected don't match.
  if (actual !== expected) {

    //The red circles are logged without going to a new line.
    process.stdout.write("🔴🔴🔴");
  }
  console.assert(actual === expected, errorMessage);

  //If the assertion passes, this if statement prints a message telling the user it passed.
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  }
};

/*This functions takes in an array of strings and counts how many of a
specified string shows up in the array.
allItems: an array of strings that we need to look through.
itemsToCount: an object specifying what string we want to count.*/
const countOnly = function(allItems, itemsToCount) {

  //This object will be used to hold the final results.
  let countedItems = {};

  //This loop checks what items we want to track, and initializes the count value to 0.
  for (let i = 0; i < allItems.length; i++) {
    if (itemsToCount[allItems[i]]) {
      countedItems[allItems[i]] = 0;
    }
  }

  //This loop counts each time a name is found in the allItems array.
  for (let j = 0; j < allItems.length; j++) {
    countedItems[allItems[j]] ++;
  }

  //This loop checks which names have a value of NaN and remvoes them from our object.
  for (let key in countedItems) {
    if (isNaN(countedItems[key])) {
      delete countedItems[key];
    }
  }
  return countedItems;
};

//Test cases below.
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); //Should pass.
assertEqual(result1["Karima"], undefined); //Should pass.
assertEqual(result1["Fang"], 3); //Should fail.
assertEqual(result1["Agouhanna"], 1); //Should fail
