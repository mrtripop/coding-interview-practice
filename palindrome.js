function isPalindrome(number) {
  const numberString = number.toString();
  const length = Math.floor(numberString.length / 2);
  for (let index = 0; index < length + 1; index++) {
    const begin = numberString[length - index];
    const end = numberString[length + index];
    if (begin !== end) {
      return false;
    }
  }
  return true;
}

const number = 111;
const result = isPalindrome(number);
console.log(result);
