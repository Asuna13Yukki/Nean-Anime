
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    document.getElementById('Menu-Btn').addEventListener('click', function () {
        document.getElementById('Other-Navbar').classList.toggle('show');
    });

    // Sign In button click
    document.getElementById('signIn').addEventListener('click', function () {
        // You can add your own logic here, for now, displaying an alert
        alert('Sign In button clicked!');
        // If you want to redirect to a login page, you can use:
        // window.location.href = "login.html";
    });
});