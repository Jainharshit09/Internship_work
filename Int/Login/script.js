function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('signup-tab').classList.remove('active');
}

function showSignUp() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('signup-tab').classList.add('active');
}

// Default to showing the login form
showLogin();

function showForm(formName) {
    const loginForm = document.querySelector('.login-form');
    const signUpForm = document.querySelector('.sign-up-form');
    const loginTab = document.querySelector('.tab:nth-child(2)');
    const signUpTab = document.querySelector('.tab:nth-child(1)');

    if (formName === 'login') {
        loginForm.style.display = 'block';
        signUpForm.style.display = 'none';
        loginTab.classList.add('active');
        signUpTab.classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signUpForm.style.display = 'block';
        loginTab.classList.remove('active');
        signUpTab.classList.add('active');
    }
}

function register() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const terms = document.getElementById('terms').checked;

    if (!username || !email || !password || !terms) {
        alert('Please fill in all fields and accept the terms and conditions.');
        return;
    }

    const user = {
        username: username,
        email: email,
        password: password
    };

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    showForm('login');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
        alert('No registered user found. Please sign up first.');
        return;
    }

    if (storedUser.username === username && storedUser.password === password) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const showPassword = passwordInput.nextElementSibling;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPassword.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        showPassword.textContent = 'Show';
    }
}
