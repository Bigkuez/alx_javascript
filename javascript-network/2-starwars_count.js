
I apologize for the previous confusion. It seems there might be an issue with the API or the way it handles character data. Let's modify the script to use a different approach that directly counts the appearances of "Wedge Antilles" in films.

Here's the corrected script:

javascript
Copy code
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

// Function to count appearances of "Wedge Antilles" in films
function countAppearances(films, characterUrl) {
  let count = 0;
  for (const film of films) {
    if (film.characters.includes(characterUrl)) {
      count++;
    }
  }
  return count;
}

// Make a GET request to the API to fetch films data
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

    // Count the appearances of "Wedge Antilles" in films
    const appearances = countAppearances(filmsData.results, `https://swapi-api.alx-tools.com/api/people/${characterId}/`);

    // Print the number of appearances
    console.log(appearances);
  } catch (parseError) {
    console.error('Error: Unable to parse response.');
    process.exit(1);
  }
});
