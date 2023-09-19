function welcome(firstName, lastName) {
    
    
    const fullName = `${firstName} ${lastName}`;
    
    
    function displayFullName() {
      // Display welcome message
      alert(`Welcome ${fullName}!`);
    }
    

    displayFullName();
  }
  
  // sample name
  welcome("John", "Doe");
  