document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorParagraph = document.getElementById("error");

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve the email input value
        const email = emailInput.value;

        // Validate the email using the validateEmail function
        if (validateEmail(email)) {
            // Email format is correct, allow form submission
            emailForm.submit();
        } else {
            // Email format is incorrect, display an error message
            errorParagraph.textContent = "Please enter a valid email address.";
        }
    });

    // Function to validate the email format
    function validateEmail(email) {
        // Regular expression for a basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
