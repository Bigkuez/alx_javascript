
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, function (_error, _response, body) {
    const charactersUrl = JSON.parse(body)['characters'];

    charactersUrl.forEach(characterUrl => {
        request(characterUrl, function (_error, _response, body) {
            console.log(JSON.parse(body)['name']);
        })
    })
})
