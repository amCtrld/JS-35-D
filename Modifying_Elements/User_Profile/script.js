const name = document.getElementById("takeName");
const email = document.getElementById("takeEmail");
const phone = document.getElementById("takePhone");
const imageInput = document.getElementById("takeImage");
const submit = document.getElementById("userInfo");

const profile = document.getElementById("profile");
const profileImage = document.getElementById("image");
const info = document.getElementById("info");
const form = document.getElementById("form");


submit.addEventListener("click", () => {
  // Get values from input fields
  const userData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
  };

  // Display user info
  info.innerHTML = `
            <p">Name: ${userData.name}</p>
            <p>Email: ${userData.email}</p>
            <p>Phone: ${userData.phone}</p>
            `;

  // Handle image upload
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.innerHTML = `<img src="${e.target.result}" alt="User Image" class="w3-image w3-roung-large">`;
    };
    reader.readAsDataURL(file);
  } else {
    profileImage.innerHTML = `<img src="space.jpg" alt="Default Image">`;
  }

  profile.style.display = "block";
  form.style.display = "none";
});

// Add styling to the placeholders
name.classList.add("w3-left", "w3-white", "w3-padding");
email.classList.add("w3-left", "w3-white", "w3-padding");
phone.classList.add("w3-left", "w3-white", "w3-padding");
info.classList.add("w3-small");
