const request = require('request');

// Check if the API URL is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Usage: node starwars_count.js <api_url>');
  process.exit(1);
}

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const characterId = 18;

// Make a GET request to the API to fetch character data
request(apiUrl + `people/${characterId}/`, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status Code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    // Parse the JSON response for character data
    const characterData = JSON.parse(body);

    // Check if the character appears in any films
    if (characterData.films && characterData.films.length > 0) {
      console.log(characterData.films.length);
    } else {
      console.log('0');
    }
  } catch (parseError) {
    console.error('Error: Unable to parse character data.');
    process.exit(1);
  }
});
