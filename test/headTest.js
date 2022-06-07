const head = require('../head');
const assertEqual = require('../assertEqual');

//Test cases.
assertEqual(head([5,6,7]), 5); //Should pass.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Should pass.
assertEqual(head([-9,-8,-6]), 9); //Should fail.