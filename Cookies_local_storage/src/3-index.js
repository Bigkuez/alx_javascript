document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.getElementById("myForm");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const loginForm = document.getElementById("loginForm");

    // Function to set cookies with a 10-day expiration
    function setCookies() {
        const firstnameValue = document.getElementById("firstname").value;
        const emailValue = document.getElementById("email").value;

        const now = new Date();
        const expirationDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000); // 10 days
        const expires = `expires=${expirationDate.toUTCString()}`;

        document.cookie = `firstname=${firstnameValue}; ${expires}; path=/`;
        document.cookie = `email=${emailValue}; ${expires}; path=/`;

        alert("Cookies set successfully!");
    }

    // Function to retrieve the value of a cookie by name
    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return "";
    }

    // Function to display the cookies
    function showCookies() {
        const firstnameCookie = getCookie("firstname");
        const emailCookie = getCookie("email");

        const paragraph = document.createElement("p");
        paragraph.textContent = `Cookies: Email: ${emailCookie} - Firstname: ${firstnameCookie}`;
        welcomeMessage.appendChild(paragraph);
    }

    // Function to delete cookies and show the form
    function deleteCookiesAndShowForm() {
        document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        welcomeMessage.innerHTML = "";
        loginForm.style.display = "block";
    }

    // Function to show the welcome message or form
    function showWelcomeMessageOrForm() {
        const firstnameCookie = getCookie("firstname");

        if (firstnameCookie) {
            // User is logged in
            welcomeMessage.innerHTML = `<h1>Welcome ${firstnameCookie} <span id="logout">(logout)</span></h1>`;
            const logoutLink = document.getElementById("logout");
            logoutLink.style.cssText = "font-weight: normal; font-style: italic; position: relative; left: 10px; cursor: pointer;";
            logoutLink.addEventListener("click", deleteCookiesAndShowForm);
            loginForm.style.display = "none";
        } else {
            // User is not logged in
            loginForm.style.display = "block";
        }
    }

    // Event listener for the "Log me in" button
    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", setCookies);

    // Event listener for the "Show the cookies" button
    const showCookiesButton = document.getElementById("showCookiesButton");
    showCookiesButton.addEventListener("click", showCookies);

    // Initial page load
    showWelcomeMessageOrForm();
});
