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

* [`assertEquals(actual, expected)`](https://github.com/NoahPalin/lotide/blob/master/assertEqual.js): This function checks if two pieces of data are equal using assertion. The function will then provided a message telling the user if the test passed or failed.
* [`head(arr)`](https://github.com/NoahPalin/lotide/blob/master/head.js): This small function returns to the user the head (first element) in an array.
* [`tail(arr)`](https://github.com/NoahPalin/lotide/blob/master/tail.js): This small function returns to the user the tail (every element other than the head) in an array.