document.addEventListener("DOMContentLoaded", function () {
    const logButton = document.getElementById("log");
    const showCookiesButton = document.getElementById("btn-show-cook");
  
    logButton.addEventListener("click", setCookies);
    showCookiesButton.addEventListener("click", showCookies);
  });
  
  function setCookies() {
    const firstnameValue = document.getElementById("firstname").value;
    const emailValue = document.getElementById("email").value;
  
    // Calculate the expiration date 10 days from now
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);
  
    // Set cookies with 10-day expiration
    document.cookie = `firstname=${firstnameValue}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}; path=/`;
  
    alert("Cookies set successfully!");
  }
  
  function showCookies() {
    const cookies = document.cookie.split("; ");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Cookies: ";
  
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      paragraph.innerHTML += `${name}=${value}; `;
    }
  
    document.body.appendChild(paragraph);
  }
  