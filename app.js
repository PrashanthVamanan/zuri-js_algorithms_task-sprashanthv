/** Problem 1 - Fahrenheit To Celsius */
console.log("------------------- Start Of Problem 1 -------------------");

function convertFahrToCelsius(fahrenheit) {
  //If input is invalid, print appropriate error message and return
  if (isInputInvalid(fahrenheit)) {
    let errorMessage = '';

    if (Array.isArray(fahrenheit)) {
      errorMessage = printErrorMessage(fahrenheit, "array");
    }
    //Reference used => https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
    else if (fahrenheit !== null && fahrenheit !== undefined && fahrenheit.constructor.name === "Object") {
      errorMessage = printErrorMessage(fahrenheit, typeof fahrenheit);
    } 
    else if (isTypeStringAndIsEmpty(fahrenheit)) {
      errorMessage = printErrorMessage(fahrenheit, typeof fahrenheit);
    } 
    else {
      errorMessage = printErrorMessage(fahrenheit, typeof fahrenheit);
    }

    return errorMessage;
  }
  //Else calculate the celsius value upto four decimal places 
  else {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    celsius = parseFloat(celsius.toFixed(4));
    return celsius;
  }
}

function isInputInvalid(input) {
  return (
    isNaN(input) ||
    input === null ||
    input === undefined ||
    input === true || 
    input === false || 
    isTypeStringAndIsEmpty(input) ||
    (Array.isArray(input) && input.length === 0)
  );
}

function isTypeStringAndIsEmpty(value) {
  return typeof value === "string" && value.trim().length === 0;
}

function printErrorMessage(value, type) {
  let message = "";

  switch (type) {
    case "array":
      message = `[${value}] is not a valid number but a/an ${type}.`;
      break;
    case "object":
      value = JSON.stringify(value);
      message = `${value} is not a valid number but a/an ${type}.`;
      break;
    default:
      message = `${value} is not a valid number but a/an ${type}.`;
      break;
  }

  return message;
}

//Test cases

//Valid test cases
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
// console.log(convertFahrToCelsius(103));

//Invalid test cases
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
// console.log(convertFahrToCelsius(null));
// console.log(convertFahrToCelsius("               "));
// console.log(convertFahrToCelsius(""));
// console.log(convertFahrToCelsius([]));
// console.log(convertFahrToCelsius({}));
// console.log(convertFahrToCelsius(true));



/** Problem 2 - Replace multiples of 2, 3, 5 with "yu", "gi", "oh" */
console.log("------------------- Start Of Problem 2 -------------------");

function checkYuGiOh(n) {
  let result = [];

  //If input is invalid print error message and return
  if (isInputInvalid(n)) {

    if (Array.isArray(n)) {
      return `invalid parameter: [${n}]`;
    } 
    else if (n !== null && n !== undefined && n.constructor.name === 'Object') {
      let value = JSON.stringify(n);
      return `invalid parameter: ${value}`;
    }
    return `invalid parameter: ${n}`;
  }

  //Convert input to a number if a string representation of number is passrd
  n = Number(n);

  for (let i = 1; i <= n; i++) {

    let currentValue = '';

    //Add corressponding strings if value is multiple of 2, 3 or 5
    if (i % 2 === 0) {
      currentValue += 'yu';
    }

    if (i % 3 === 0) {
      currentValue += 'gi';
    }

    if (i % 5 === 0) {
      currentValue += 'oh';
    }

    //Add hyphens

    //If string length is 4 add one hyphen
    if (currentValue.length === 4) {
      currentValue = currentValue.slice(0, 2) + "-" + currentValue.slice(2);
    } 
    //If string length is 6 add two hyphens
    else if (currentValue.length === 6) {
      currentValue = currentValue.slice(0, 2) + "-" + currentValue.slice(2, 4) + "-" + currentValue.slice(4);
    }

    //Indicates the value is not a multiple of 2, 3 or 5
    if (currentValue.length === 0) {
      result.push(i);
    } else {
      result.push(currentValue);
    }
  }

  return result;
}

//Valid test cases
console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
// console.log(checkYuGiOh(30));
// console.log(checkYuGiOh("12"));

//Invalid test cases
console.log(checkYuGiOh("fizzbuzz is meh"));
// console.log(checkYuGiOh([1,2]));
// console.log(checkYuGiOh({}));
// console.log(checkYuGiOh({temp : 0}));
// console.log(checkYuGiOh(""));
// console.log(checkYuGiOh(null));
// console.log(checkYuGiOh(undefined));
// console.log(checkYuGiOh(false));

