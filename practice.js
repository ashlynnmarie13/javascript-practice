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

// Given an array and chunk size, divide that array into many subarrays where eacher
// subarray is of length size
// ex: ([1,2,3,4,5],2) makes ([1,2],[3,4],[5])

function chunk(array, size) {
  //declare new empty array
  const chunked = [];

  for (let element of array) {
    //gettng the last element in chunked
    const last = chunked[chunked.length - 1];
    // if there is no last or last's length is less that the size,
    // push the current element into the chunk
    if (!last || last.length === size) {
      chunked.push([element]);
      // else push the entire element(chunk) into the chunked array
    } else {
      last.push(element);
    }
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

function chunky(array, size) {
  //declare new empty array
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    //incrementing by the size variable
    index += size;
  }
  return chunked;
}

console.log(chunky([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

//removing all extra characters from a string
str.replace(/[^\w]/g, "");

//anagrams
function anagram(strA, strB) {
  const newStrA = buildCharMap(strA);
  const newStrB = buildCharMap(strB);

  if (Object.keys(newStrA).length != Object.keys(newStrB).length) {
    return false;
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for (let char in str.replace(/[^\w]/, g).toLowerCase) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

//capitalize every word in a string

function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUppercase + word.slice(1));
  }
  return words.join(" ");
}

//based on a number, print stairs
//ex: 3 would be
// "#  "
// "## "
// "###"

function stairs(n) {
  for (let row = 0; row < n; row++) {
    steps = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        steps += "#";
      } else {
        steps += " ";
      }
    }
    console.log(steps);
  }
}

// basic recursion
function printNumber(n) {
  if (n === 0) {
    return;
  }
  printNumber(n - 1);
}
printNumber(10);

// return the number of vowels
vowels = str => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

vowelsTwo = str => {
  const matches = str.match(/[a,e,i,o,u]/, gi);
  return matches ? matches.length : 0;
};
