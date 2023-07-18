function reverseString(string) {
  const length = string.length;
  let result = "";
  for (let index = length - 1; index >= 0; index--) {
    const char = string.slice(index, index + 1);
    result += char;
  }
  return result;
}

function reverseOrder(strings) {
  const length = strings.length;
  const reverseArray = [];
  for (let index = length - 1; index >= 0; index--) {
    const string = reverseString(strings[index]);
    reverseArray.push(string);
  }
  return reverseArray;
}

const string = "Hello, World, Make, It, Easy";
const resultString = reverseString(string);
console.log("String: ", resultString);

const strings = ["Hello", "World", "Make", "It", "Easy"];
const resultStrings = reverseOrder(strings);
console.log("Strings: ", resultStrings);
