// script.js
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Example validation logic (usually, this would involve checking against a database)
    if (username === 'admin' && password === 'password123') {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Sign in successful!';
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Invalid username or password.';
    }
});
