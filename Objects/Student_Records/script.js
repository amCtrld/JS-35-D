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

    // Convert the marks to numbers before adding
    const totalMarks = parseInt(physicsMarks.value) + parseInt(chemistryMarks.value) + parseInt(mathsMarks.value);

    let remark = "";

    function evaluation() {
        if (totalMarks >= 240){
            remark = "Passed";
        }
        else{
            remark = "Failed";
        }

        return remark;
        }

    console.log(studentObject);
    results.innerHTML = `
    <p>${studentObject.firstName} ${studentObject.lastname}</p>
    <p>${studentObject.registrationNo}</p>
    <p>${studentObject.physicsMarks}</p>
    <p>${studentObject.chemistryMarks}</p>
    <p>${studentObject.mathsMarks}</p>
    <p class="${evaluation() === 'Passed' ? 'w3-green' : 'w3-red'}">${evaluation()}</p>
    `;
});
