// Add click event handler to the login button
document.getElementById('btn-login').addEventListener('click', function () {
    // Get email and password
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Check email and password
    if (email === 'arman@gmail.com' && password === 'armanmahim') {
        // Redirect to bank.html
        window.location.href = 'bank.html';
    } else {
        alert('Enter a valid Email or Password');
    }
});
