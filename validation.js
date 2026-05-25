document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        const errors = [];
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (username.length < 3) {
            errors.push('Username must be at least 3 characters long.');
        }

        if (password.length < 6) {
            errors.push('Password must be at least 6 characters long.');
        }

        if (errors.length > 0) {
            event.preventDefault();
            alert(errors.join('\n'));
            usernameInput.focus();
        }
    });
});
