/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

// const fetchMyIP = function(callback) {
//   // use request to fetch IP address from JSON API
//   request(`https://api.ipify.org?format=json`, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     const data = JSON.parse(body);
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }
    
//     callback(null, data.ip);
//     return;
//   });
// };

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    callback(null, { latitude: data.latitude, longitude: data.longitude });
    return;
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};