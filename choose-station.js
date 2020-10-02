const chooseStations = function (stations) {
  let goodStations = [];
  for (let station of stations) {
    const capacity = station[1];
    const type = station[2];
    if (capacity >= 20 && (type === 'school' || type === 'community centre')) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

//console.log(goodStations);
//console.log(chooseStations(stations));