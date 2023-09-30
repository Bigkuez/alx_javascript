document.addEventListener("DOMContentLoaded", function () {
    const dynamicForm = document.getElementById("dynamicForm");
    const numFieldsSelect = document.getElementById("numFields");
    const inputContainer = document.getElementById("inputContainer");

    // Add an event listener to the dropdown menu to generate input fields dynamically
    numFieldsSelect.addEventListener("change", function () {
        const selectedValue = parseInt(numFieldsSelect.value);
        generateInputFields(selectedValue);
    });

    dynamicForm.addEventListener("submit", function (event) {
        // Validate the form before submission
        if (!validateForm()) {
            event.preventDefault(); // Prevent the form from submitting
            alert("Please fill in all fields.");
        }
    });

    // Function to generate input fields dynamically based on the selected value
    function generateInputFields(numFields) {
        inputContainer.innerHTML = ""; // Clear the existing input fields

        for (let i = 1; i <= numFields; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = "field" + i;
            input.placeholder = "Field " + i;
            inputContainer.appendChild(input);
        }
    }

    // Function to validate the form
    function validateForm() {
        const inputs = inputContainer.querySelectorAll("input");

        // Check if any input field is empty
        for (const input of inputs) {
            if (input.value.trim() === "") {
                return false; // Form is not valid
            }
        }

        return true; // Form is valid
    }
});
