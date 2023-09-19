// Define the welcomeMessage function
function welcomeMessage(fullName) {
    // This is a closure that alerts "Welcome" followed by the provided fullName
    return function () {
      alert(`Welcome ${fullName}`);
    };
  }
  
  // variables with closures for welcome messages
  var guillaume = welcomeMessage("Guillaume");
  var alex = welcomeMessage("Alex");
  var fred = welcomeMessage("Fred");
  
  // Test the variables by invoking them
  guillaume(); 
  alex();     
  fred();      
  