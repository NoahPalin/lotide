const middle = function(arr) {
  let actualMiddle = [];
  let locateMiddle = [];
  locateMiddle.push(arr.length);
  if (locateMiddle[0] === 1 || locateMiddle[0] === 2){
    return "There is no middle to this array.";
  }
  if (arr.length === 0){
    return actualMiddle;
  }

  if (locateMiddle[0] % 2 !== 0) {
    locateMiddle[0] = locateMiddle[0] / 2 + 0.5
  } else if (locateMiddle % 2 === 0) {
    locateMiddle[1] = locateMiddle[0] / 2;
    locateMiddle[2] = locateMiddle[0] / 2 + 1;
    locateMiddle.splice(0, 1);
  }
  
  if (locateMiddle.length === 1) {
    actualMiddle[0] = arr[locateMiddle[0] - 1];
    return actualMiddle;
  }
  if (locateMiddle.length === 2) {
    actualMiddle[0] = arr[locateMiddle[0] - 1];
    actualMiddle[1] = arr[locateMiddle[1] - 1];
    return actualMiddle;
  }
  
};

console.log(middle([4, 6, "hi", true, 9, 10]));