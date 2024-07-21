/*
Marks reference
80 - 99 = A
70 - 79 = B
60 - 69 = C
50 - 59 = D
40 - 49 = E

*/

//Collect user input
const studentName = document.getElementById("studentName");
const studentMark = document.getElementById("studentMark");
const gradeButton = document.getElementById("grade");

//Where to post
const gradedName = document.getElementById("gradedName");
const gradedMark = document.getElementById("gradedMark");
const gradedGrade = document.getElementById("gradedGrade");


grade.addEventListener("click", () => {
    const name = studentName.value;
    const mark = studentMark.value;

    if(mark >= 80 && mark <= 99) {
        gradedGrade.innerHTML = "A";
    } else if(mark >= 70 && mark <= 79) {
        gradedGrade.innerHTML = "B";
    } else if(mark >= 60 && mark <= 69) {
        gradedGrade.innerHTML = "C";
    } else if(mark >= 50 && mark <= 59) {
        gradedGrade.innerHTML = "D";
    } else if(mark >= 40 && mark <= 49) {
        gradedGrade.innerHTML = "E";
    } else {
        gradedGrade.innerHTML = "F";
    }

    gradedName.innerHTML = name;
    gradedMark.innerHTML = mark;
});