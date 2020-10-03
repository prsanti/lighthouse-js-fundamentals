function lastIndexOf(array, index) {
  let lastIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === index) {
      lastIndex = i;
    }
  }
  return lastIndex;
}

// Test code
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// trying for...of loop
/*
  let position = 0;
  for (let i of array) {
    if (i === index) {
      position = i; // wrong, idk how to call the position w/ i as the value
    }
  }
  if (position >= 0) {
    return position;
  } else {
    return -1;
  }
  */