const assertEqual = require('../assertEqual');

//The following four lines of code are just for testing purposes.
assertEqual("Lighthouse Labs", "Bootcamp"); //Should fail.
assertEqual(1, 1); //Should pass.
assertEqual(4, 5); //Should fail.
assertEqual(2.0, 2); //Should pass.