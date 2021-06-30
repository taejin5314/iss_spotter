// index.js

const { nextISSTimesForMyLocation } = require('./iss');

const printText = function(times) {
  for (const obj of times) {
    const date = new Date(0);
    date.setUTCSeconds(obj.risetime);
    const duration = obj.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printText(passTimes);
});