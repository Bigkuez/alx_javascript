// Import the 'request' module for making HTTP requests
const request = require('request');

// Get the API URL from the command line arguments
const url = process.argv[2];

// Define the character ID for Wedge Antilles
const characterId = '18';

// Make a request to the specified URL
request(url, function (_error, _response, body) {
  try {
    // Parse the JSON response from the API
    const data = JSON.parse(body);

    // Extract the list of films from the API response or initialize an empty array if not present
    const films = data.results || [];

    // Initialize a counter to keep track of the number of movies with Wedge Antilles
    let count = 0;

    // Iterate through each film in the 'films' array
    films.forEach(film => {
      // Check if the film has a 'characters' array and if Wedge Antilles is present
      if (film.characters && film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
        // If Wedge Antilles is present in the film, increment the count
        count += 1;
      }
    });

    // Print the final count of movies with Wedge Antilles
    console.log(count);
  } catch (error) {
    // Handle any errors that occur during JSON parsing
    console.error('Error:', error);
    process.exit(1); // Exit the script with a non-zero status code to indicate an error
  }
});
