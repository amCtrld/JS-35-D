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

    infoDisplay.textContent = `
        First Name: ${userData.fname} \n
        Last Name: ${userData.lname}
        Email: ${userData.email}
        Phone: ${userData.phone}
        Nationality: ${userData.nationality}
    `;
    console.log(display);

}
);