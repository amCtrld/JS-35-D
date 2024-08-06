
const name = document.getElementById("takeName");
const email = document.getElementById("takeEmail");
const phone = document.getElementById("takePhone");
const bio = document.getElementById("takeBio");
const imageInput = document.getElementById("takeImage");
const submit = document.getElementById("userInfo");
const portada = document.getElementById("portada");
const displayName = document.getElementById("name");
const displayBio = document.getElementById("bioDesc");
const displayContacts = document.getElementById("contacts");
const form = document.getElementById("form");

const userData = {
    name: "",
    email: "",
    phone: "",
    bio: "",
};

function editProfile() {
    form.style.display = "block";
}

function displayProfile() {
    displayName.textContent = userData.name;
    displayBio.textContent = userData.bio;
    displayContacts.textContent = `${userData.phone} / ${userData.email}`;
}

submit.addEventListener("click", () => {
    if ([name.value, email.value, phone.value, bio.value].includes("")) {
        alert("Fields cannot be empty!");
        return;
    }

    // Update userData object
    Object.assign(userData, {
        name: name.value,
        email: email.value,
        phone: phone.value,
        bio: bio.value
    });

    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            portada.innerHTML = `<img src="${e.target.result}" alt="User Image" class="w3-image w3-card w3-round-large">`;
        };
        reader.readAsDataURL(file);
    } else {
        portada.innerHTML = `<img src="space.jpg" alt="Default Image" class="w3-image w3-card w3-round-large">`;
    }

    displayProfile();
    form.style.display = "none";
});