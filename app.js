
document.addEventListener("DOMContentLoaded", loadSavedData);

function addGoalRow() {
    let table = document.getElementById("goalsTable");
    let row = table.insertRow(-1);
    let dateCell = row.insertCell(0);
    let workoutCell = row.insertCell(1);
    let studyCell = row.insertCell(2);
    let dietCell = row.insertCell(3);

    let today = new Date().toISOString().split('T')[0];
    dateCell.textContent = today;

    [workoutCell, studyCell, dietCell].forEach(cell => {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        cell.appendChild(checkbox);
    });

    saveGoals();
}

function saveGoals() {
    let table = document.getElementById("goalsTable").innerHTML;
    localStorage.setItem("goalsTable", table);
}

function loadSavedData() {
    let savedTable = localStorage.getItem("goalsTable");
    if (savedTable) {
        document.getElementById("goalsTable").innerHTML = savedTable;
    }
    let savedNotes = localStorage.getItem("learningLog");
    if (savedNotes) {
        document.getElementById("learningLog").value = savedNotes;
    }
}

function saveLearning() {
    let text = document.getElementById("learningLog").value;
    localStorage.setItem("learningLog", text);
}
