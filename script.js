// Predefined login details
const prebuiltLoginDetails = {
    email: "test@gmail.com",
    password: "test"
};


// Function to show the Login tab
function showLogin() {
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("signup").classList.add("hidden");
    document.getElementById("login-tab").classList.add("active");
    document.getElementById("signup-tab").classList.remove("active");
    clearErrorMessage();
}

// Function to show the Signup tab
function showSignup() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("signup").classList.remove("hidden");
    document.getElementById("login-tab").classList.remove("active");
    document.getElementById("signup-tab").classList.add("active");
    clearErrorMessage();
}

// Function to clear error messages
function clearErrorMessage() {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = "";
}

// Event listener for Login form submission
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    const email = event.target.querySelector("input[type='email']").value.trim();
    const password = event.target.querySelector("input[type='password']").value.trim();
    const errorElement = document.getElementById("error-message");

    if (email === prebuiltLoginDetails.email && password === prebuiltLoginDetails.password) {
        // Set session flag indicating successful login
        sessionStorage.setItem('loggedIn', 'true');
        // Redirect to the welcome page
        window.location.href = "welcome.html";
    } else {
        errorElement.textContent = "Invalid email or password. Please try again.";
    }
});

// Event listener for Signup form submission (Placeholder)
document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    // Placeholder for signup action
    // For demo purposes, we consider signup always successful
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = "welcome.html";
});

// On page load, check if already logged in
window.addEventListener('load', function() {
    if (sessionStorage.getItem('loggedIn') === 'true') {
        window.location.href = "welcome.html";
    }
});
