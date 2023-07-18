function fizzBuzz(number) {
  for (let index = 1; index < number + 1; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuss");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
}

const number = 100;
fizzBuzz(number);
