function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

/*
  const start = range[0];
  const end = range[1];
  const multipleOne = multiples[0];
  const multipleTwo = multiples[1];
  const wordOne = words[0];
  const wordTwo = words[1];
  */