document.addEventListener("DOMContentLoaded", function (event) {
    const welcomeMessage = document.getElementById("welcomeMessage");
    const loginForm = document.getElementById("loginForm");
    const myForm = document.getElementById("myForm");
    const loginButton = document.getElementById("loginButton");
    const showCookiesButton = document.getElementById("showCookiesButton");

    // Check if the user is logged in (by checking if cookies exist)
    if (Cookies.get("firstname") && Cookies.get("email")) {
        // User is logged in
        showWelcomeMessageOrForm();

        // Handle logout
        welcomeMessage.addEventListener("click", deleteCookiesAndShowForm);
    } else {
        // User is not logged in
        showForm();
    }

    // Show the form when the "Log me in" button is clicked
    loginButton.addEventListener("click", setCookiesAndShowWelcomeMessage);

    // Show cookies when the "Show the cookies" button is clicked
    showCookiesButton.addEventListener("click", showCookies);

    function setCookiesAndShowWelcomeMessage() {
        const firstname = document.getElementById("firstname").value;
        const email = document.getElementById("email").value;

        // Use js-cookie to set cookies
        Cookies.set("firstname", firstname, { expires: 10 }); // Expires in 10 days
        Cookies.set("email", email, { expires: 10 }); // Expires in 10 days

        // Call the showWelcomeMessageOrForm function to display the welcome message
        showWelcomeMessageOrForm();
    }

    function deleteCookiesAndShowForm() {
        // Use js-cookie to remove cookies
        Cookies.remove("firstname");
        Cookies.remove("email");

        // Hide the welcome message and show the login form
        welcomeMessage.style.display = "none";
        loginForm.style.display = "block";

        // Clear the input fields
        myForm.reset();
    }

    function showForm() {
        // Hide the welcome message and show the login form
        welcomeMessage.style.display = "none";
        loginForm.style.display = "block";
    }

    function showCookies() {
        // Get cookies using js-cookie
        const firstnameCookie = Cookies.get("firstname");
        const emailCookie = Cookies.get("email");

        // Display cookies
        alert(`Cookies:\nFirst Name: ${firstnameCookie}\nEmail: ${emailCookie}`);
    }

    function showWelcomeMessageOrForm() {
        // Get cookies using js-cookie
        const firstnameCookie = Cookies.get("firstname");

        // Check if the user is logged in (firstname cookie exists)
        if (firstnameCookie) {
            // User is logged in
            // Build the welcome message using JavaScript
            const welcomeMessageText = `Welcome ${firstnameCookie} (logout)`;
            const welcomeMessageElement = document.createElement("h1");
            welcomeMessageElement.textContent = welcomeMessageText;

            // Style the message
            welcomeMessageElement.style.cursor = "pointer";
            welcomeMessageElement.style.fontStyle = "italic";
            welcomeMessageElement.style.marginLeft = "10px";

            // Add click event to logout
            welcomeMessageElement.addEventListener("click", deleteCookiesAndShowForm);

            // Clear the page and display the welcome message
            document.body.innerHTML = "";
            document.body.appendChild(welcomeMessageElement);
        } else {
            // User is not logged in
            showForm();
        }
    }
});
