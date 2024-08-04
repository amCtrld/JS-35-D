
const name = document.getElementById("takeName");
const email = document.getElementById("takeEmail");
const phone = document.getElementById("takePhone");
const imageInput = document.getElementById("takeImage");
const submit = document.getElementById("userInfo");
const profile = document.getElementById("profile");
const profileImage = document.getElementById("image");
const info = document.getElementById("info");
const form = document.getElementById("form");

const userData = {
    name: "",
    email: "",
    phone: "",
};

function editProfile() {
    profile.style.display = "none";
    form.style.display = "block";
    name.value = userData.name;
    email.value = userData.email;
    phone.value = userData.phone;
}

function displayProfile() {
    info.innerHTML = `
        <p>Name: ${userData.name}</p>
        <p>Email: ${userData.email}</p>
        <p>Phone: ${userData.phone}</p>
        <button class="w3-button w3-blue w3-right" onclick="editProfile()">Edit Profile</button>
    `;
    profile.style.display = "block";
    form.style.display = "none";
}

submit.addEventListener("click", () => {
    if (name.value === "" || email.value === "" || phone.value === "") {
        alert("Fields cannot be empty!");
        return;
    } else {
        // Update userData object
        userData.name = name.value;
        userData.email = email.value;
        userData.phone = phone.value;

        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImage.innerHTML = `<img src="${e.target.result}" alt="User Image" class="w3-image w3-card w3-round-large">`;
            };
            reader.readAsDataURL(file);
        } else {
            profileImage.innerHTML = `<img src="space.jpg" alt="Default Image" class="w3-image w3-card w3-round-large">`;
        }

        displayProfile();
    }
});