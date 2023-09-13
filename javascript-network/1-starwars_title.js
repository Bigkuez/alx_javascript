const request = require('request');

// Check if a movie ID is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Usage: node starwars_title.js <episode_number>');
  process.exit(1);
}

// Get the episode number from the command-line arguments
const episodeNumber = process.argv[2];

// Construct the API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${episodeNumber}`;

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
    const movieData = JSON.parse(body);

    // Check if the episode_id matches the provided episode number
    if (movieData && movieData.episode_id == episodeNumber) {
      console.log(movieData.title);
    } else {
      console.error(`Error: Movie with Episode Number ${episodeNumber} not found.`);
    }
  } catch (parseError) {
    console.error('Error: Unable to parse response.');
    process.exit(1);
  }
});
