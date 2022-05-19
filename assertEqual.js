const assertEqual = function(actual, expected) {
    let errorMessage = actual + " !== " + expected;
    
    console.assert (actual === expected, errorMessage);

    if (actual === expected){
        console.log ("Assertion Passed: " + actual + " === " + expected);
    }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(4, 5);
assertEqual(2.0, 2);