// variables provided
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

// takes in vegetables array and a string for metric
// NEED to use bracket notation to call bc metric is a string
// CANNOT use dot notation
const judgeVegetable = function (vegetables, metric) {
  let highestValue = 0;
  let name = "";
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highestValue) {
      highestValue = vegetables[i][metric];
      name = vegetables[i].submitter;
    }
  }
  return name;
}

// Test code
console.log(judgeVegetable(vegetables, metric));