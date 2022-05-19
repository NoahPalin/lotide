const assertEqual = function(actual, expected) {
    let errorMessage = `${actual} !== ${expected}`;
    if (actual !== expected) {
      process.stdout.write("🔴🔴🔴");
    }
    console.assert(actual === expected, errorMessage);
  
    if (actual === expected) {
      console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
    }
  };
  
function head (arr) {
    let firstElm = arr[0];
    return firstElm;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
