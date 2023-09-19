// Defining the divideBy function
function divideBy(firstNumber) {
    // a function that takes a second number and returns the division result
    return function (secondNumber) {
      return secondNumber / firstNumber;
    };
  }
  
  // Defining the addBy function
  function addBy(firstNumber) {
    // Return a function that takes a second number and returns the sum
    return function (secondNumber) {
      return secondNumber + firstNumber;
    };
  }
  
  // closures using divideBy and addBy functions
  var addBy100 = addBy(100);
  var addBy1000 = addBy(1000);
  var divideBy10 = divideBy(10);
  var divideBy100 = divideBy(100);
  

  console.log(addBy100(20));      
  console.log(divideBy10(20));      
  console.log(divideBy100(200));    
  console.log(addBy1000(20));       
  