/*
Marks reference
80 - 99 = A
70 - 79 = B
60 - 69 = C
50 - 59 = D
40 - 49 = E

*/

//Collect user input
const firstName = document.getElementById("studentFirstName");
const lastName = document.getElementById("studentLastName");
const studentMark = document.getElementById("studentMark");
const gradeButton = document.getElementById("grade");

//Where to post
const gradedName = document.getElementById("gradedName");
const gradedMark = document.getElementById("gradedMark");
const gradedGrade = document.getElementById("gradedGrade");


gradeButton.addEventListener("click", () => {
    const fname = firstName.value;
    const lname = lastName.value;
    let mark = parseInt(studentMark.value); // Parse the input as an integer

    let grade; // Declare a variable to store the grade

    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 70) {
        grade = "B";
    } else if (mark >= 60) {
        grade = "C";
    } else if (mark >= 50) {
        grade = "D";
    } else if (mark >= 40) {
        grade = "E";
    } else if (mark < 40) {
        grade = "F";
    } else {
        grade = "N/A";
    }

    gradedName.innerHTML = fname + " " + lname;
    gradedMark.innerHTML = mark;
    gradedGrade.innerHTML = grade;
});
