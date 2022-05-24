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

/*This function takes in an object searches through the object for a
value matching the target. It then returns the key that corresponds
to the target value.
obj: an object containing keys that only have one value each.
target: the string you are looking for.*/
const findKeyByValue = function(obj, target) {

  //Loops through the entire object.
  for (let key in obj) {

    //Checks if a key's value matches the target.
    if (bestTVShowsByGenre[key] === target) {

      //Returns the key that corresponds to the target value.
      return key;
    }
  }

  //Eeturns undefined if no value was found that matches the target.
  return undefined;
};

//An example object used for the test cases.
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  dark: "Mr. Robot",
  crime: "Breaking Bad",
  midieval: "Game of Thrones",
  animated: "Attack on Titan"
};

//Test cases.
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //Should pass.
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //Should pass.
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "animated"); //Should fail.
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Umbrella Academy"), "sciFi"); //Should fail.

