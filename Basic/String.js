// A function to reverse a string
function reverser(input) {
  let result = "";
  for (let index = input.length - 1; index >= 0; index--) {
    result += input[index];
  }
  return result;
}

console.log(reverser("abcde"));
//////////////////////////////////////////////////////////////////////////////

// A function to check two strings that are reverse of each other or not
function reverseChecker(s1, s2) {
  if (s1.length !== s2.length) return false;

  for (let index = 0; index < s1.length; index++) {
    if (s1[index] !== s2[s2.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

console.log(reverseChecker("abcdefg", "gfedcba"));
//////////////////////////////////////////////////////////////////////////////

// A function to count words in a string
function countWords(input) {
  let counter = 0;
  let flag = false;

  for (let index = 0; index < input.length; index++) {
    if (input[index] === " ") {
      flag = false;
    } else if (!flag) {
      counter++;
      flag = true;
    }
  }

  return counter;
}

console.log(countWords("fdsf   dsf  f"));
//////////////////////////////////////////////////////////////////////////////

// A function to captalize the first letter of words
function captalizer(input) {
  let output = input.toLowerCase();
  let flag = true;
  let result = "";

  for (let index = 0; index < input.length; index++) {
    if (output[index] == " " && output[index + 1] !== " ") {
      flag = true;
      result += output[index];
    } else if (flag) {
      result += output[index].toUpperCase();
      flag = false;
    } else {
      if (output[index] !== " ") {
        result += output[index];
      }
    }
  }

  return result;
}

console.log(captalizer("abh cd fdsf    ef"));
//////////////////////////////////////////////////////////////////////////////

// A fucntion to add comma to seprate digits
function commaAdd(number) {
  let starter = number.length % 3;
  let result = "";

  if (starter == 1) {
    result = number[0];
  } else if (starter == 2) {
    result = number[0] + number[1];
  }

  for (let index = starter; index < number.length; index++) {
    if ((index - starter) % 3 === 0 && index != 0) {
      result += "," + number[index];
      console.log(index);
    } else {
      result += number[index];
    }
  }
  return result;
}

console.log(commaAdd("1827425365"));
//////////////////////////////////////////////////////////////////////////////

// A function to find a specific pair
function pairFinder(string, pair) {
  // validation...

  for (let index = 0; index < string.length; index++) {
    if (string[index] + string[index + 1] == pair) {
      return index;
    }
  }
  return false;
}

console.log(pairFinder("fasdfsdafdsf", "tt"));
//////////////////////////////////////////////////////////////////////////////

// A function to add <> before and after a specific pair
function pairBeAf(string, pair) {
  let result = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] + string[index + 1] == pair) {
      result += "<" + pair + ">";
    } else {
      result += string[index];
    }
  }
  return result;
}

console.log(pairBeAf("fasdfasfas", "as"));
//////////////////////////////////////////////////////////////////////////////

// A function to replace a char with another symbol
function replacer(string, char, altChar) {
  let output = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] == char) {
      output += altChar;
    } else {
      output += string[index];
    }
  }

  return output;
}

function replacer2(string, char, altChar) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] == char) {
      string =
        string.slice(0, index) +
        altChar +
        string.slice(index + 1, string.length);
    }
  }

  return string;
}

console.log(replacer("Hello WORLD!", "L", "?"));
console.log(replacer2("Hello WORLD!", "L", "?"));
//////////////////////////////////////////////////////////////////////////////
