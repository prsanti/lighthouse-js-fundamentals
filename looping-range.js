function range(start, end, step) {
  let rangeArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return []; // Should be: return rangeArray; to be consistent?
  } else {
    for (let i = 0; start <= end; i++) {
      rangeArray[i] = start;
      start += step;
    }
  }
  return rangeArray;
}

// Test code
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));