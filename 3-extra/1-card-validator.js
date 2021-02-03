function convertToArray(cardNumber) {
  const cardNumberArray = cardNumber.toString().split("");
  return cardNumberArray;
}

function turnArrayValueToNumber(cardNumber) {
  return cardNumber.map((digit) => {
    return parseInt(digit, 10);
  });
}

function areThere2DifferentDigit(cardNumber) {
  return cardNumber.some((digit, index) => {
    return cardNumber.indexOf(digit) !== index;
  });
}

function sumAllDigit(cardNumber) {
  return cardNumber.reduce((accumulator, currentValue) => {
    return parseInt(accumulator, 10) + parseInt(currentValue, 10);
  });
}

function isAllNumber(cardNumber) {
  return cardNumber.every((digit) => {
    return typeof digit === "number";
  });
}

function checkCardValidity(cardNumber) {
  const cardNumberArray = convertToArray(cardNumber);
  const NumberArray = turnArrayValueToNumber(cardNumberArray);
  const is16digit = NumberArray.length === 16;
  const areThereMinimum2DifferentDigit = areThere2DifferentDigit(NumberArray);
  const isAllDigitNumber = isAllNumber(NumberArray);
  const isEven = NumberArray[NumberArray.length - 1] % 2 === 0;
  const isSumGreaterThan16 = sumAllDigit(NumberArray) > 16;
  if (
    is16digit &&
    isAllDigitNumber &&
    isEven &&
    isSumGreaterThan16 &&
    areThereMinimum2DifferentDigit
  ) {
    return "this card is VALID";
  } else return "this is FAKE ,mate";
}

//I am testing below

const aValidNumber = 1234567890123456; //this is a valid card number
const nonValidNumber1 = 1111111111111111; //checking minimum 2 different digit-not valid
const nonValidNumber2 = 12384949849849; // checking 16 digit requirement-not valid
const nonValidNumber3 = 1111110000000000; //checking sum of digits greater than 16 requirement-not valid
const nonValidNumber4 = 4687557575775755; // checking final digit must be even requirement-not valid
const nonValidNumber5 = "768787878788a78c"; //testing all digit must be number requirement-not valid

console.log(checkCardValidity(aValidNumber));
console.log(checkCardValidity(nonValidNumber1));
console.log(checkCardValidity(nonValidNumber2));
console.log(checkCardValidity(nonValidNumber3));
console.log(checkCardValidity(nonValidNumber4));
console.log(checkCardValidity(nonValidNumber5));
