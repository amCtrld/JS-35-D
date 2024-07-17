// User info data holders
const firstname = document.getElementById('fName');
const lastname = document.getElementById('lName');
const email = document.getElementById('eMail');
const phone = document.getElementById('pHone');
const nationality = document.getElementById('yourCountry');

//Action buttons placeholders
const submit = document.getElementById('userInfo');
const reset = document.getElementById('reset');

//User data display
const display = document.getElementById('infoDisplay');

userInfo.addEventListener("click", () => {
    const userData = {
        fname : firstname.value,
        lname : lastname.value,
        email : email.value,
        phone : phone.value,
        nationality : nationality.value,
    }

    // Print user info on separate lines
    infoDisplay.innerHTML = 'Your Info is:<br><br>' +
     `
        First Name: ${userData.fname}<br>
        Last Name: ${userData.lname}<br>
        Email: ${userData.email}<br>
        Phone: ${userData.phone}<br>
        Nationality: ${userData.nationality}
    `;

    console.log(display);

}
);
