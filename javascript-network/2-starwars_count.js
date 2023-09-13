const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length < 3) {
  console.error('Please provide the API URL as an argument.');
  process.exit(1);
}

// Define the character ID for Wedge Antilles
const characterId = 18;

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Function to make a request to the API
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

async function countMoviesWithWedgeAntilles(apiUrl, characterId) {
  try {
    const characterData = await makeRequest(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
    const films = characterData.films;

    console.log(films.length);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

countMoviesWithWedgeAntilles(apiUrl, characterId);
