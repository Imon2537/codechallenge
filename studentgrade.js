let prompt = require('prompt-sync')();
function getStudentGrade() {
    let marks = parseInt(prompt("Please enter the student's marks (0-100):"));
    marks = Number(marks);

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else if (marks < 40 && marks > 0) {
        grade = 'E';
    } else {
        console.log("Invalid input");
    }
    console.log(`The grade for marks ${marks} is: ${grade}`);
}

getStudentGrade();
