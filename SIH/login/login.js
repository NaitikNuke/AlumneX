function goBack() {
    window.history.back();
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    const errorMsg = document.getElementById('error-msg');

    if (email === 'alumni@example.com' && password === '1234') {
        alert('Login Successful 🎉 Welcome to alumneX');
        errorMsg.textContent = '';
    } else {
        errorMsg.textContent = 'Invalid email or password';
    }
});
