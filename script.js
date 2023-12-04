document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform validation checks and display error messages if needed

        return true; // Return false if validation fails
    }
});
