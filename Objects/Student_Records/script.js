const firstName = document.getElementById("fName");
const lastname = document.getElementById("lName");
const registrationNo = document.getElementById("regNo");
const physicsMarks = document.getElementById("physics");
const chemistryMarks = document.getElementById("chemistry");
const mathsMarks = document.getElementById("maths");

const results = document.getElementById("result");
const submit = document.getElementById("submit");

const studentObject = {
    firstName: firstName.value,
    lastname: lastname.value,
    registrationNo: registrationNo.value,
    physicsMarks: physicsMarks.value,
    chemistryMarks: chemistryMarks.value,
    mathsMarks: mathsMarks.value,
};

submit.addEventListener("click", () => {
    
    console.log(studentObject);
});