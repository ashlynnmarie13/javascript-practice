// Given a string, return the character thats used most frequently
// creating an object, the key is the character and the value is the amount
// of times it has been used
console.log("hey");
const string = "Hi my name is Ashlynn";

function maxChar(string) {
  const obj = {};
  let max = 0;
  let maxChar = "";
  // use of to iterate through a string
  for (let char of string) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  //use in to iterate through the object
  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
  console.log(maxChar);
}

maxChar(string);

// FizzBuzz
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(1, 2, 3, 4, 5, 6, 7, 8, 9, 55, 33);
//
