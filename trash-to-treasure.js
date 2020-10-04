// formatted for code eval
// switch and case are on the same line
function smartGarbage(trash, bins) {
  switch (trash) {
  case "waste":
    bins.waste++;
    break;
  case "recycling":
    bins.recycling++;
    break;
  case "compost":
    bins.compost++;
    break;
  }
  return bins;
};
// Test code
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));