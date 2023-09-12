#!/usr/bin/node

// Define the initial object
const myObject = {
    type: 'object',
    value: 12
  };
  
  // Define the incr function as a named function expression
  function incr() {
    this.value++;
  }
  
  // Display the initial object
  console.log({ type: myObject.type, value: myObject.value });
  
  // Add the incr function to the object
  myObject.incr = incr;
  
  // Define a helper function to hide the function in the output
  function hideFunctionInOutput(key, value) {
    if (typeof value === 'function') {
      return '[Function]';
    }
    return value;
  }
  
  // Increment and display the object three times with the function hidden
  for (let i = 0; i < 3; i++) {
    myObject.incr();
    console.log(JSON.stringify(myObject, hideFunctionInOutput, 2));
  }
  