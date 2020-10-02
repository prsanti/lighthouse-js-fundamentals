// If num is less than 0, return 0.
// If num is divisible by 100 return num / 100
// If not, loop through increments of 100 and count how many times without going over the num.
function howManyHundreds(num) {
  if (num < 100) {
    return 0;
  } else if (num % 100 === 0) {
    return num / 100;
  } else {
    let count = 1;
    for (let n = 100; n < num; n += 100) {
      if (num - n < 100) {
        return count;
      } else {
        count++;
      }
    }
  }
}

// Test code
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);