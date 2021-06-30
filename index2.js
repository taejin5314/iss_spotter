// index2.js

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');
const { printText } = require('./index');
// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printText(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });