function OpenForm() {
    const accountContainer = document.querySelector('.account-container');
    let isVisible = false;
    const currentOpacity = parseFloat(accountContainer.style.opacity) || 0;

    // Toggle visibility by changing the opacity
    accountContainer.style.opacity = currentOpacity === 0 ? '1' : '0';
}

function validateForm() {
    const nameInput = document.querySelector('.name');
    const emailInput = document.querySelector('.email');
    const phoneInput = document.querySelector('.phone');
    const passInput = document.querySelector('.pass');

    // Validate name
    if (nameInput.value.length < 2 || nameInput.value.length > 30) {
        alert('Name should be between 2 and 30 characters.');
        return;
    }

    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(emailInput.value) || !emailInput.value.endsWith('@gmail.com')) {
        alert('Enter a valid Gmail address.');
        return;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        alert('Phone number must be 10 digits.');
        return;
    }

    // Validate password
    if (passInput.value.length === 0) {
        alert('Password is required.');
        return;
    }

    // If all validations pass, you can submit the form or perform further actions.
    alert('Account Created Successfully');
    // You might want to submit the form or perform additional actions here.
}