document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("submitForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve the values entered in the form fields
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Validate the form fields
        if (name === "" || email === "") {
            // Display an error message if any required fields are empty
            errorMessage.textContent = "Please fill in all required fields.";
            successMessage.textContent = ""; // Clear success message
        } else {
            // Clear error message if all validations pass
            errorMessage.textContent = "";

            // Display a success message
            successMessage.textContent = "Form submitted successfully!";
            
            // You can submit the form here if needed
            // submitForm.submit();
        }
    });
});
