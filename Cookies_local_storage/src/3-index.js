document.addEventListener("DOMContentLoaded", function () {
    const logButton = document.getElementById("log");
    const showCookiesButton = document.getElementById("btn-show-cook");
  
    logButton.addEventListener("click", setCookies);
    showCookiesButton.addEventListener("click", showCookies);
  
    showWelcomeMessageOrForm();
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
    const firstname = getCookie("firstname");
    const email = getCookie("email");
  
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
    document.body.appendChild(paragraph);
  }
  
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return "";
  }
  
  function showForm() {
    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
      welcomeMessage.style.display = "none";
    }
  
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.style.display = "block";
    }
  }
  
  function hideForm() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.style.display = "none";
    }
  }
  
  function deleteCookiesAndShowForm() {
    document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
    showForm();
  }
  
  function showWelcomeMessageOrForm() {
    const firstname = getCookie("firstname");
    if (firstname) {
      const welcomeMessage = document.createElement("h1");
      welcomeMessage.id = "welcomeMessage";
      welcomeMessage.innerHTML = `Welcome ${firstname} <a href="#" id="logout">(logout)</a>`;
  
      const logoutLink = document.getElementById("logout");
      if (logoutLink) {
        logoutLink.style.cssText = "font-weight: normal; font-style: italic; margin-left: 10px;";
  
        logoutLink.addEventListener("click", function () {
          deleteCookiesAndShowForm();
          welcomeMessage.style.display = "none";
        });
      }
  
      document.body.replaceWith(welcomeMessage);
    } else {
      showForm();
    }
  }
  