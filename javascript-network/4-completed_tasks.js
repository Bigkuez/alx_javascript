const request = require('request');

// Check if the API URL is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Usage: node completed_tasks.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Make a GET request to the API URL
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
    const todos = JSON.parse(body);

    // Initialize an object to store the count of completed tasks by user ID
    const completedTasksByUser = {};

    // Iterate through the todos and count completed tasks by user
    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    // Print the result in the format you specified
    console.log(JSON.stringify(completedTasksByUser, null, 2));
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
    process.exit(1);
  }
});
