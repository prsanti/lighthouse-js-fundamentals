// variables provided
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

// Actual code
// Push an array with time and the const speed to the cars array
const carPassing = function (cars, speed) {
  const time = Date.now();
  cars.push({ time, speed });
  return cars;
}

// Test code
console.log(carPassing(cars, speed));