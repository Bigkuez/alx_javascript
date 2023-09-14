
const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL for the specific movie
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make an HTTP request to fetch movie data
request(url, function (_error, _response, body) {
    // Parse the JSON response to extract character URLs
    const charactersUrl = JSON.parse(body)['characters'];

    // Iterate through character URLs
    charactersUrl.forEach(characterUrl => {
        // Make an HTTP request to fetch character data
        request(characterUrl, function (_error, _response, body) {
            // Parse the JSON response to extract and print the character's name
            console.log(JSON.parse(body)['name']);
        });
    });
});
