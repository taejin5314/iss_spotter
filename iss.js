/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const { API_KEY, IP } = require('./constants');
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${IP}`, (error, response, body) => {
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
    
    callback(null, data.ip);
    return;
  });
};

module.exports = { fetchMyIP };