const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "hburnhaHPD" && password === "19690518") {
        alert("You have successfully logged in.");
        window.location.assign("https://cityofhuntingtonwv.com/HPDPortal.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
