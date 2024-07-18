// A function to print numbers in the form 1 + 3k without using conditional statements (if else). Assume k can range from 1 to 100.
function threeKPlusOne() {
  for (let index = 1; index < 101; index++) {
    console.log(3 * index + 1);
  }
}

threeKPlusOne();
//////////////////////////////////////////////////////////////////////////////

// A function that prints odd numbers divisible by 3 between 100 and 1000.
function oddAndDividable3() {
  for (let index = 101; index < 1000; index += 2) {
    if (index % 3 == 0) {
      console.log(index);
    }
  }
}

oddAndDividable3();
//////////////////////////////////////////////////////////////////////////////

// A function to sum of even numbers between 100 and 1000
function sum100to1000() {
  let sum = 0;
  for (let index = 0; index <= 4; index += 2) {
    sum += index;
  }
  return sum;
}

console.log(sum100to1000());
//////////////////////////////////////////////////////////////////////////////

// A function to calculate the product of numbers from 1 to 10
function prod1to10() {
  let product = 1;
  for (let index = 1; index <= 10; index++) {
    product *= index;
  }
  return product;
}

console.log(prod1to10());
//////////////////////////////////////////////////////////////////////////////

// A function to produce random number between 10 to 50
function random10to50() {
  let number = 40 * Math.random() + 10;
  return number;
}

console.log(random10to50());
//////////////////////////////////////////////////////////////////////////////

// A function that produce 1000 random number and count up and below to 30
function upAndBelow30() {
  let countUp = 0;
  let countDown = 0;

  for (let index = 1; index <= 10000; index++) {
    let number = 40 * Math.random() + 10;

    if (number > 15) {
      countUp++;
    } else if (number < 15) {
      countDown++;
    }
  }

  console.log(countUp);
  console.log(countDown);
}

upAndBelow30();
//////////////////////////////////////////////////////////////////////////////

// A function to sum the digits of a number
function digitSum(inputNumber) {
  let temp = 0;
  while (inputNumber > 0) {
    temp += inputNumber % 10;
    inputNumber = (inputNumber - (inputNumber % 10)) / 10;
  }
  return temp;
}

console.log(digitSum(597));
//////////////////////////////////////////////////////////////////////////////