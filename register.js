document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn form gửi đi nếu có lỗi
    const form = event.target;

    // Lấy các giá trị
    const username = form.querySelector('#username');
    const email = form.querySelector('#email');
    const password = form.querySelector('#password');
    const confirmPassword = form.querySelector('#confirm-password');
    const phone = form.querySelector('#phone');
    const gender = form.querySelector('input[name="gender"]:checked');
    const terms = form.querySelector('#terms');

    let isValid = true;

    // Reset thông báo lỗi
    form.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    // Kiểm tra Username
    if (username.value.trim() === '') {
        setError(username, 'Username is required');
        isValid = false;
    }

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

    // Kiểm tra Confirm Password
    if (password.value.trim() !== confirmPassword.value.trim()) {
        setError(confirmPassword, 'Passwords do not match');
        isValid = false;
    }

    // Kiểm tra Phone
    if (!validatePhone(phone.value.trim())) {
        setError(phone, 'Invalid phone number');
        isValid = false;
    }

    // Kiểm tra Gender
    if (!gender) {
        setError(form.querySelector('.gender'), 'Please select your gender');
        isValid = false;
    }

    // Kiểm tra Terms
    if (!terms.checked) {
        setError(terms, 'You must agree to the terms');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        form.reset(); // Reset form sau khi đăng ký thành công
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

// Hàm kiểm tra số điện thoại hợp lệ
function validatePhone(phone) {
    const regex = /^[0-9]{10,11}$/; // Số điện thoại từ 10-11 số
    return regex.test(phone);
}
