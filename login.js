document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn form gửi đi nếu có lỗi
    const form = event.target;

    // Lấy các giá trị
    const email = form.querySelector('#email');
    const password = form.querySelector('#password');

    let isValid = true;

    // Reset thông báo lỗi
    form.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    // Kiểm tra Email
    if (!validateEmail(email.value.trim())) {
        setError(email, 'Invalid email address');
        isValid = false;
    }

    // Kiểm tra Password
    if (password.value.trim().length < 6) {
        setError(password, 'Password must be at least 6 characters');
        isValid = false;
    }

    if (isValid) {
        alert('Login successful!');
        form.reset(); // Reset form sau khi đăng nhập thành công
    }
});

// Hàm đặt thông báo lỗi
function setError(input, message) {
    const errorMessage = input.parentElement.querySelector('.error-message');
    errorMessage.textContent = message;
}

// Hàm kiểm tra email hợp lệ
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
