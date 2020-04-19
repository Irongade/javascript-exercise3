const array = [];

isDivisibleBy2 = false;
isDivisibleBy3 = false;
isDivisibleBy5 = false;

function caseStatement(isDivisibleBy2, isDivisibleBy3, isDivisibleBy5, val) {
  if (
    isDivisibleBy2 === true &&
    isDivisibleBy3 === true &&
    isDivisibleBy5 === true
  ) {
    value = "yu-gi-oh";
  } else if (
    isDivisibleBy2 === true &&
    isDivisibleBy3 === true &&
    isDivisibleBy5 === false
  ) {
    value = "yu-gi";
  } else if (
    isDivisibleBy2 === true &&
    isDivisibleBy3 === false &&
    isDivisibleBy5 === true
  ) {
    value = "yu-oh";
  } else if (
    isDivisibleBy2 === false &&
    isDivisibleBy3 === true &&
    isDivisibleBy5 === true
  ) {
    value = "gi-oh";
  } else if (
    isDivisibleBy2 === true &&
    isDivisibleBy3 === false &&
    isDivisibleBy5 === false
  ) {
    value = "yu";
  } else if (
    isDivisibleBy2 === false &&
    isDivisibleBy3 === true &&
    isDivisibleBy5 === false
  ) {
    value = "gi";
  } else if (
    isDivisibleBy2 === false &&
    isDivisibleBy3 === false &&
    isDivisibleBy5 === true
  ) {
    value = "oh";
  } else {
    value = val;
  }

  console.log(value);
  return value;
}

function divideNumber(arr, num) {
  for (i = 0; i < num; i++) {
    val = i + 1;
    if (val % 2 === 0 && val % 3 === 0 && val % 5 === 0) {
      isDivisibleBy2 = true;
      isDivisibleBy3 = true;
      isDivisibleBy5 = true;
    } else if (val % 2 === 0 && val % 3 === 0) {
      isDivisibleBy2 = true;
      isDivisibleBy3 = true;
    } else if (val % 2 === 0 && val % 5 === 0) {
      isDivisibleBy2 = true;
      isDivisibleBy5 = true;
    } else if (val % 3 === 0 && val % 5 === 0) {
      isDivisibleBy3 = true;
      isDivisibleBy5 = true;
    } else if (val % 2 === 0) {
      isDivisibleBy2 = true;
    } else if (val % 3 === 0) {
      isDivisibleBy3 = true;
    } else if (val % 5 === 0) {
      isDivisibleBy5 = true;
    } else {
      isDivisibleBy2 = false;
      isDivisibleBy3 = false;
      isDivisibleBy5 = false;
    }

    output = caseStatement(isDivisibleBy2, isDivisibleBy3, isDivisibleBy5, val);

    arr.push(output);

    isDivisibleBy2 = false;
    isDivisibleBy3 = false;
    isDivisibleBy5 = false;
  }
  return arr;
}

const newArray = divideNumber(array, 100);

const myArray = divideNumber(array, 150);

console.log(newArray);
