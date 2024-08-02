const name = document.getElementById("takeName");
const email = document.getElementById("takeEmail");
const phone = document.getElementById("takePhone");
const image = document.getElementById("takeImage");
const submit = document.getElementById("userInfo");

const profile = document.getElementById("profile");
const profileImage = document.getElementById("image");
const info = document.getElementById("info");

const userData = {
    name : name.value,
    email : email.value,
    phone : phone.value,
    image : image.value
}

submit.addEventListener("click", () => {
    info.innerHTML = `Name: ${userData.name}<br>
    Email: ${userData.email}<br>
    Phone: ${userData.phone}<br>
    Image: ${userData.image}<br>`
})
