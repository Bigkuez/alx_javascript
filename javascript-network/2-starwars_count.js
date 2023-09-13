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

// Make a request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Parse the JSON response
  const data = JSON.parse(body);

  // Filter movies where Wedge Antilles is present
  const moviesWithWedgeAntilles = data.results.filter((movie) => {
    return movie.characters.includes(characterId);
  });

  // Print the number of movies
  console.log(moviesWithWedgeAntilles.length);
});
