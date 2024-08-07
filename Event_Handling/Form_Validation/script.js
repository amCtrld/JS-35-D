const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const passwordMain = document.getElementById("passwordMain");
const passwordCopy = document.getElementById("passwordCopy");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // Get the values from the inputs
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordMainValue = passwordMain.value.trim();
    const passwordCopyValue = passwordCopy.value.trim();

    if (validateRequired(name)) {
        setSuccessFor(name, 'nameError');
    } else {
        setErrorFor(name, 'nameError', 'Name is required');
    }

    if (validateRequired(email)) {
        if (validateEmail(email)) {
            setSuccessFor(email, 'emailError');
        } else {
            setErrorFor(email, 'emailError', 'Invalid email');
        }
    } else {
        setErrorFor(email, 'emailError', 'Email is required');
    }

    if (validateRequired(phone)) {
        if (validatePhoneNumber(phone)) {
            setSuccessFor(phone, 'phoneError');
        } else {
            setErrorFor(phone, 'phoneError', 'Invalid phone number');
        }
    } else {
        setErrorFor(phone, 'phoneError', 'Phone number is required');
    }

    if (validateRequired(passwordMain)) {
        if (validatePassword(passwordMain)) {
            setSuccessFor(passwordMain, 'passwordMainError');
        } else {
            setErrorFor(passwordMain, 'passwordMainError', 'Password is not strong enough');
        }
    } else {
        setErrorFor(passwordMain, 'passwordMainError', 'Password is required');
    }

    if (validateRequired(passwordCopy)) {
        if (validateConfirmPassword(passwordMain, passwordCopy)) {
            setSuccessFor(passwordCopy, 'passwordCopyError');
        } else {
            setErrorFor(passwordCopy, 'passwordCopyError', 'Passwords do not match');
        }
    } else {
        setErrorFor(passwordCopy, 'passwordCopyError', 'Please confirm your password');
    }

    function displayFormData() {
        const formData = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            passwordMain: passwordMain.value,
            passwordCopy: passwordCopy.value
        };
        console.log(formData);
    }

    if(validateRequired(name) && validateEmail(email) && validatePhoneNumber(phone) && validatePassword(passwordMain) && validateConfirmPassword(passwordMain, passwordCopy)) {

        output.innerHTML = `
            <h2>Form Data</h2>
            <p>Name: ${name.value}</p>
            <p>Email: ${email.value}</p>
            <p>Phone: ${phone.value}</p>
            <p>Password: ${passwordMain.value}</p>
            <p>Confirm Password: ${passwordCopy.value}</p>
        `;

        displayFormData();
    }

}

function validateRequired(field) {
    return field.value.trim() !== '';
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.value.trim());
}

function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10}$/; // Example for a 10-digit number
    return phonePattern.test(phone.value.trim());
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password.value.trim());
}

function validateConfirmPassword(password, confirmPassword) {
    return password.value.trim() === confirmPassword.value.trim();
}

function setErrorFor(input, errorElementId, message) {
    const errorElement = document.getElementById(errorElementId);
    errorElement.innerText = message;
}

function setSuccessFor(input, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    errorElement.innerText = '';
}
