function draw(element, line) {
  let oneLine = "";
  // prepare oneLine string
  for (let index = 0; index < element; index++) {
    const begin = Math.floor(element / 2) - line;
    const end = Math.floor(element / 2) + line;
    if (index < begin || index > end) {
      oneLine += "*";
    } else {
      oneLine += "A";
    }
  }
  return oneLine;
}

function drawTriangle(element) {
  // calculate dimension
  const dimension = Math.floor(element / 2) + 1;
  // draw triangle
  for (let line = 0; line < dimension; line++) {
    const oneLine = draw(element, line);
    console.log(oneLine);
  }
}

function drawReverseTriangle(element) {
  // calculate dimension
  const dimension = Math.floor(element / 2) + 1;
  // draw triangle
  for (let line = dimension - 1; line >= 0; line--) {
    const oneLine = draw(element, line);
    console.log(oneLine);
  }
}

const element = 5;

console.log(" ");
console.log("Triangle");
drawTriangle(element);

console.log(" ");
console.log("Reverse Triangle");
drawReverseTriangle(element);
