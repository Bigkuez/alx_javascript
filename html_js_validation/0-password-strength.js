document.addEventListener("DOMContentLoaded", function () {
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const errorParagraph = document.getElementById("error");
  
    passwordForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting by default
  
      // Retrieve the password input value
      const password = passwordInput.value;
  
      // Validate the password
      if (validatePassword(password)) {
        // Password meets the criteria, allow form submission
        passwordForm.submit();
      } else {
        // Password does not meet the criteria, display an error message
        errorParagraph.textContent =
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
      }
    });
  
    // Function to validate the password
    function validatePassword(password) {
      const minLength = 8;
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const digitRegex = /[0-9]/;
      const specialCharRegex = /[!@#$%^&*]/;
  
      return (
        password.length >= minLength &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
      );
    }
  });
  