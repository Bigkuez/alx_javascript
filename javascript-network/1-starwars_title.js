const request = require('request');

// Mapping of episode numbers to movie IDs
const episodeToMovieId = {
  1: 1,
  2: 5,
  3: 6,
  4: 4,
  5: 2,
  6: 3,
  7: 7,
};

// Check if an episode number is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Usage: node starwars_title.js <episode_number>');
  process.exit(1);
}

// Get the episode number from the command-line arguments
const episodeNumber = parseInt(process.argv[2]);

// Check if the provided episode number exists in the mapping
if (!episodeToMovieId.hasOwnProperty(episodeNumber)) {
  console.error(`Error: Movie with Episode Number ${episodeNumber} not found.`);
  process.exit(1);
}

// Get the corresponding movie ID from the mapping
const movieId = episodeToMovieId[episodeNumber];

// Construct the API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

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

    // Print the title of the movie
    console.log(movieData.title);
  } catch (parseError) {
    console.error('Error: Unable to parse response.');
    process.exit(1);
  }
});
