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
const grade = document.getElementById("grade");

//Where to post
const gradedName = document.getElementById("gradedName");
const gradedMark = document.getElementById("gradedMark");

grade.addEventListener("click", () => {
    const name = studentName.value;
    const mark = studentMark.value;

    if(mark >= 80 && mark <= 99) {
        grade.innerHTML = "A";
    } else if(mark >= 70 && mark <= 79) {
        grade.innerHTML = "B";
    } else if(mark >= 60 && mark <= 69) {
        grade.innerHTML = "C";
    } else if(mark >= 50 && mark <= 59) {
        grade.innerHTML = "D";
    } else if(mark >= 40 && mark <= 49) {
        grade.innerHTML = "E";
    } else {
        grade.innerHTML = "F";
    }

    gradedName.innerHTML = name;
    gradedMark.innerHTML = mark;
});