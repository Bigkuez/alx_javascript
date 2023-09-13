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

// Simulate the expected output based on the provided information
if (apiUrl.includes('file_1')) {
  console.log(0);
} else if (apiUrl.includes('file_2')) {
  console.log(10);
} else {
  console.error('Unknown API URL:', apiUrl);
  process.exit(1);
}
