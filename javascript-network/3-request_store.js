const request = require('request');
const fs = require('fs');

// Check if the URL and file path are provided as command-line arguments
if (process.argv.length !== 4) {
  console.error('Usage: node request_store.js <URL> <output_file_path>');
  process.exit(1);
}

// Get the URL and file path from command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status Code ${response.statusCode}`);
    process.exit(1);
  }

  // Save the response body to the specified file with UTF-8 encoding
  fs.writeFileSync(filePath, body, 'utf-8');

  
});
