const name = document.getElementById("takeName");
const email = document.getElementById("takeEmail");
const phone = document.getElementById("takePhone");
const imageInput = document.getElementById("takeImage"); // Assuming this is an input field
const submit = document.getElementById("userInfo");

const profile = document.getElementById("profile");
const profileImage = document.getElementById("image");
const info = document.getElementById("info");

submit.addEventListener("click", () => {
    // Get values from input fields
    const userData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        image: imageInput.value // Assuming this is an input field
    };

    // Display image (if valid)
    if (userData.image) {
        profileImage.src = userData.image;
    } else {
        // Display a placeholder image if no valid URL is provided
        profileImage.src = "path/to/placeholder.jpg"; // Replace with your placeholder image path
    }

    // Display user info
    info.innerHTML = `Name: ${userData.name}<br>
    Email: ${userData.email}<br>
    Phone: ${userData.phone}<br>
    Image: <img src="${userData.image}" alt="User Image">`; // Display image in the info section
});
