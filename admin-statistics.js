// Sample Data for Room Status
const roomData = [
    { type: "Deluxe Room", available: 10, booked: 5, occupied: 8 },
    { type: "Superior Room", available: 15, booked: 7, occupied: 10 },
    { type: "Suite Room", available: 5, booked: 3, occupied: 4 }
];

// Sample Data for Employee Performance
const employeeData = [
    { name: "John Doe", role: "Receptionist", tasksCompleted: 120, hoursWorked: 160 },
    { name: "Jane Smith", role: "Housekeeper", tasksCompleted: 200, hoursWorked: 170 },
    { name: "Mark Brown", role: "Concierge", tasksCompleted: 90, hoursWorked: 150 }
];

// Render Room Status Statistics
function renderRoomStatus() {
    const roomResult = document.getElementById("roomResult");
    let tableContent = `
        <table>
            <thead>
                <tr>
                    <th>Room Type</th>
                    <th>Available</th>
                    <th>Booked</th>
                    <th>Occupied</th>
                </tr>
            </thead>
            <tbody>
    `;

    roomData.forEach(room => {
        tableContent += `
            <tr>
                <td>${room.type}</td>
                <td>${room.available}</td>
                <td>${room.booked}</td>
                <td>${room.occupied}</td>
            </tr>
        `;
    });

    tableContent += "</tbody></table>";
    roomResult.innerHTML = tableContent;
}

// Render Employee Performance Statistics
function renderEmployeePerformance() {
    const employeeResult = document.getElementById("employeeResult");
    let tableContent = `
        <table>
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Role</th>
                    <th>Tasks Completed</th>
                    <th>Hours Worked</th>
                </tr>
            </thead>
            <tbody>
    `;

    employeeData.forEach(employee => {
        tableContent += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.role}</td>
                <td>${employee.tasksCompleted}</td>
                <td>${employee.hoursWorked}</td>
            </tr>
        `;
    });

    tableContent += "</tbody></table>";
    employeeResult.innerHTML = tableContent;
}

// Initialize Data on Page Load
window.onload = function () {
    renderRoomStatus();
    renderEmployeePerformance();
};
