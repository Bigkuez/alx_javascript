// variable named globalVariable with value "Welcome"
var globalVariable = "Welcome";

// function named outer
function outer() {
  // Alert the content of globalVariable
  alert(globalVariable);

  // variable named course with value "Holberton"
  var course = "Holberton";

  // function named inner
  function inner() {
    // Alert the content of globalVariable and course (concatenated)
    alert(globalVariable + " " + course);

    // variable named exclamation with value "!"
    var exclamation = "!";

    // function named inception
    function inception() {
      // Alert the content of globalVariable, course, and exclamation (concatenated)
      alert(globalVariable + " " + course + exclamation);
    }

    // Call the function inception
    inception();
  }

  // Call the function inner
  inner();

  // Call the function inception within inner
  inner.inception = function () {
    // Alert the content of globalVariable, course, and exclamation (concatenated)
    alert(globalVariable + " " + course + " " + exclamation);
  };
}

// Call the function outer
outer();


outer.inner();


outer.inner.inception();
