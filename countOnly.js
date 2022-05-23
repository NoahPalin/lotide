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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //this object will be used to hold the final results
  let countedItems = {};
  //this loop checks what items we want to track, and initializes that value to 0
  for (let i = 0; i < firstNames.length; i++) {
    if (itemsToCount[firstNames[i]]) {
      countedItems[firstNames[i]] = 0;
    }
  }
  //this loop counts each time a name is found in the allItems array
  for (let j = 0; j < firstNames.length; j++) {
    countedItems[firstNames[j]] ++;
  }

  //this loop checks which names have a value of NaN and remvoes them from our object
  for (let key in countedItems) {
    if (isNaN(countedItems[key])) {
      delete countedItems[key];
    }
  }
  return countedItems;
};

//test cases below
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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
