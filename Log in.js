document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form submission to handle validation manually

    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Regular expression for username (at least one uppercase, one lowercase, and one number)
    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    // Regular expression for password (at least 8 characters, one uppercase, one lowercase, one number, and one special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;:,.<>?/-]).{8,}$/;

    // Clear previous error messages and reset border styles
    document.getElementById("error-message").textContent = "";
    document.getElementById("username").style.borderColor = "";
    document.getElementById("password").style.borderColor = "";
    document.getElementById("username-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    let isValid = true;

    // Validate username
    if (username === "" || !usernameRegex.test(username)) {
        isValid = false;
        document.getElementById("username").style.borderColor = "red";  // Highlight username field
        document.getElementById("username-error").textContent = "Username incorrect";  // Error message below username
    }

    // Validate password
    if (password === "" || !passwordRegex.test(password)) {
        isValid = false;
        document.getElementById("password").style.borderColor = "red";  // Highlight password field
        document.getElementById("password-error").textContent = "Password incorrect";  // Error message below password
    }


    if (isValid) {
        alert("Login successful!");

    }

});
