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

    switch (true) {
        case mark >= 80 && mark <= 99: // Check for the range 80-99
            grade = "A";
            break;
        case mark >= 70 && mark <= 79: // Check for the range 70-79
            grade = "B";
            break;
        case mark >= 60 && mark <= 69:
            grade = "C";
            break;
        case mark >= 50 && mark <= 59:
            grade = "D";
            break;
        case mark >= 40 && mark <= 49:
            grade = "E";
            break;
        case mark < 40:
            grade = "F";
            break;
        default: // This will now catch marks above 99
            grade = "N/A";
            break;
    }
    


    gradedName.innerHTML = fname + " " + lname;
    gradedMark.innerHTML = mark;
    gradedGrade.innerHTML = grade;
});
