// Define an object or use the global 'window' object
const myFunctions = {};

// Define the 'add' function
myFunctions.add = function (a, b) {
  return a + b;
};

// Export the object (if you are using Node.js or a module system)
// module.exports = myFunctions;

// Or if you are in a browser environment, the function is already visible

// Example usage:
const result = myFunctions.add(5, 7);
console.log(result); // Output: 12
