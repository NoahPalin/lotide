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

//obj: an object containing keys that only have one value each
//target: the string you are looking for
const findKeyByValue = function(obj, target) {

  //loops through the entire object
  for (let key in obj) {

    //checks if a key's value matches the target
    if (bestTVShowsByGenre[key] === target) {

      //returns the key that corresponds to the target value
      return key;
    }
  }

  //returns undefined if no value was found that matches the target
  return undefined;
};

//an object used for the test cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  dark: "Mr. Robot",
  crime: "Breaking Bad",
  midieval: "Game of Thrones",
  animated: "Attack on Titan"
};

//test cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");//should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);//should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "animated");//should fail
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Umbrella Academy"), "sciFi");//should fail

