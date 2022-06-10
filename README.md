# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @noahpalin/lotide`

**Require it:**

`const _ = require('@noahpalin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* [`assertArraysEqual(arr1, arr2)`](https://github.com/NoahPalin/lotide/blob/master/assertArraysEqual.js): Checks if two arrays are identical to eachother using assertion.
* [`assertEquals(actual, expected)`](https://github.com/NoahPalin/lotide/blob/master/assertEqual.js): Checks if two pieces of data are equal using assertion. The function will then provided a message telling the user if the test passed or failed.
* [`assertObjectsEqual(object1, object2)`](https://github.com/NoahPalin/lotide/blob/master/assertObjectsEqual.js): Checks if two objects have identical keys with identical values.
* [`countLetters(str)`](https://github.com/NoahPalin/lotide/blob/master/countLetters.js): Counts how many of each letter there are in a string, then returns that answer in an object.
* [`countOnly(allItems, itemsToCount)`](https://github.com/NoahPalin/lotide/blob/master/countOnly.js): Takes in an array of strings and counts how many of a specified string is in the array.
* [`eqArrays(arr1, arr2)`](https://github.com/NoahPalin/lotide/blob/master/eqArrays.js): Checks if two arrays are equal to eachother and returns true if they are, and false if they are not.
* [`findKey(obj, callback)`](https://github.com/NoahPalin/lotide/blob/master/findKey.js): Loops through an object and returns the first key whoes vallue passes the callback function.
* [`findKeyByValue(obj, target)`](https://github.com/NoahPalin/lotide/blob/master/findKeyByValue.js): Loops through an object are returns the first key that matches the target value.
* [`flatten(arr)`](https://github.com/NoahPalin/lotide/blob/master/flatten.js): Takes in a 2D array and converts it to a 1D array.
* [`head(arr)`](https://github.com/NoahPalin/lotide/blob/master/head.js): This small function returns to the user the head (first element) in an array.
* [`letterPosition(sentence)`](https://github.com/NoahPalin/lotide/blob/master/letterPosition.js): Takes in a string and returns all the indices of a specified character.
* [`map(array, callback)`](https://github.com/NoahPalin/lotide/blob/master/map.js): Applies a function (the callback function) to each element inside an array of strings.
* [`middle(arr)`](https://github.com/NoahPalin/lotide/blob/master/middle.js): Finds the middle element(s) of an array of numbers.
* [`tail(arr)`](https://github.com/NoahPalin/lotide/blob/master/tail.js): This small function returns to the user the tail (every element other than the head) in an array.
* [`takeUntil(array, callback)`](https://github.com/NoahPalin/lotide/blob/master/takeUntil.js): Returns a new array from a given array containing every each element from the original until an element causes the callback to return true.
* [`without(source, itemsToRemove)`](https://github.com/NoahPalin/lotide/blob/master/without.js): Takes in an array and removes every element that matches an element in the itemsToRemove array, the returns the new altered array.