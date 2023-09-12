const request = require('request');

// Check if a URL argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 0-statuscode.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

// Perform a GET request
request(url, (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
