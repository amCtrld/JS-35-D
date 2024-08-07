// User info data holders
const firstname = document.getElementById('fName');
const lastname = document.getElementById('lName');
const email = document.getElementById('eMail');
const phone = document.getElementById('pHone');
const nationality = document.getElementById('yourCountry');

// Action buttons placeholders
const submit = document.getElementById('userInfo');
const reset = document.getElementById('reset');

// User data display
const display = document.getElementById('infoDisplay');

// Function to display user info
const displayUserInfo = () => {
    const userData = {
        fName: firstname.value,
        lName: lastname.value,
        email: email.value,
        phone: phone.value,
        nationality: nationality.value
    };

    // Template literal for better readability
    display.innerHTML = `
        <p>Your Info is:</p>
        <p>First Name: ${userData.fName}</p>
        <p>Last Name: ${userData.lName}</p>
        <p>Email: ${userData.email}</p>
        <p>Phone: ${userData.phone}</p>
        <p>Nationality: ${userData.nationality}</p>
    `;
};

// Event listener for submit button
submit.addEventListener("click", displayUserInfo);

// Optional: Event listener for reset button to clear the display
reset.addEventListener("click", () => {
    display.innerHTML = ''; // Clear the displayed user info
});
