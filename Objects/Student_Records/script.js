const firstName = document.getElementById("fName");
const lastname = document.getElementById("lName");
const registrationNo = document.getElementById("regNo");
const physicsMarks = document.getElementById("physics");
const chemistryMarks = document.getElementById("chemistry");
const mathsMarks = document.getElementById("maths");

const results = document.getElementById("result");
const submit = document.getElementById("submit");


submit.addEventListener("click", () => {
    

    const studentObject = {
        firstName: firstName.value,
        lastname: lastname.value,
        registrationNo: registrationNo.value,
        physicsMarks: physicsMarks.value,
        chemistryMarks: chemistryMarks.value,
        mathsMarks: mathsMarks.value,
    };

    console.log(studentObject);
    results.innerHTML = `
    <p>${studentObject.firstName} ${studentObject.lastname}</p>
    <p>${studentObject.registrationNo}</p>
    <p>${studentObject.physicsMarks}</p>
    <p>${studentObject.chemistryMarks}</p>
    <p>${studentObject.mathsMarks}</p>
    `;
});