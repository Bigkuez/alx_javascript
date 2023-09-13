const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a Movie ID as the first argument.');
  process.exit(1);
}

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error('Error fetching movie data.');
    process.exit(1);
  }

  const movie = JSON.parse(body);

  if (!movie.characters || movie.characters.length === 0) {
    console.error('No characters found for this movie.');
    process.exit(1);
  }

  const characterUrls = movie.characters;

  function fetchCharacterName(characterUrl) {
    return new Promise((resolve, reject) => {
      request(characterUrl, (error, response, body) => {
        if (error || response.statusCode !== 200) {
          reject('Error fetching character data.');
        } else {
          const character = JSON.parse(body);
          resolve(character.name);
        }
      });
    });
  }

  const characterPromises = characterUrls.map(fetchCharacterName);

  Promise.all(characterPromises)
    .then((characterNames) => {
      characterNames.forEach((name) => {
        console.log(name);
      });
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
});
