const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

    if (username === "95-006129") {
        alert("Accessing...");
	window.location.assign("https://cityofhuntingtonwv.com/HPDCase95006129.html");
    } else if (username === "95-006145") {
        alert("Accessing...");
	window.location.replace("https://cityofhuntingtonwv.com/HPDCase95006145.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
