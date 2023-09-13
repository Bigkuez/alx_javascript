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

// Make a GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status Code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    // Parse the JSON response
    const filmsData = JSON.parse(body);

    // Filter films where "Wedge Antilles" is present
    const filmsWithWedge = filmsData.results.filter((film) =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    // Print the number of films with "Wedge Antilles"
    console.log(filmsWithWedge.length);
  } catch (parseError) {
    console.error('Error: Unable to parse response.');
    process.exit(1);
  }
});
