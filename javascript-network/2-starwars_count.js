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

// Function to fetch character data
function fetchCharacterData(url) {
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

// Function to count movies where Wedge Antilles is present
async function countMoviesWithWedgeAntilles(apiUrl, characterId) {
  try {
    const filmsResponse = await fetchCharacterData(apiUrl);
    const films = filmsResponse.results;

    let count = 0;

    for (const film of films) {
      const charactersInFilm = await Promise.all(
        film.characters.map((characterUrl) => fetchCharacterData(characterUrl))
      );

      if (charactersInFilm.some((character) => character.id === characterId)) {
        count++;
      }
    }

    console.log(count);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

countMoviesWithWedgeAntilles(apiUrl, characterId);
