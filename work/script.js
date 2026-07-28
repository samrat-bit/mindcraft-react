const name = document.getElementById("name");
const mark1 = document.getElementById("m1");
const mark2 = document.getElementById("m2");
const mark3 = document.getElementById("m3");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

const getGrade = (average) => {
    if (average >= 90) {
        return "A";
    } else if (average >= 75) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 40) {
        return "D";
    } else {
        return "F";
    }
};

calculate.addEventListener("click", () => {

    const studentName = name.value.trim();
    const m1 = Number(mark1.value);
    const m2 = Number(mark2.value);
    const m3 = Number(mark3.value);

    if (
        studentName === "" ||
        mark1.value === "" ||
        mark2.value === "" ||
        mark3.value === ""
    ) {
        result.style.color = "red";
        result.innerHTML = "Please fill all the details.";
        return;
    }

    if (
        m1 < 0 || m1 > 100 ||
        m2 < 0 || m2 > 100 ||
        m3 < 0 || m3 > 100
    ) {
        result.style.color = "red";
        result.innerHTML = "Marks must be between 0 and 100.";
        return;
    }

    const marks = [m1, m2, m3];
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;
    const grade = getGrade(average);

    let status;

    if (grade === "F") {
        status = "Fail";
        result.style.color = "red";
    } else {
        status = "Pass";
        result.style.color = "green";
    }

    result.innerText = `
         ${studentName}
         ${average}
         ${grade}
         ${status}`;
});