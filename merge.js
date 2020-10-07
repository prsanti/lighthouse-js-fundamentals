function merge(array1, array2) {
  let newArray = array1;
  for (const num of array2) {
    newArray.push(num);
  }
  
// could just use newArray.sort() here

  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[i] > newArray[j]) {
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
    }
  }
  return newArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);