let employees = [];

// Add employee function
function addEmployee() {
    const name = document.getElementById("employeeName").value;
    const role = document.getElementById("employeeRole").value;
    const hours = parseInt(document.getElementById("workingHours").value);

    if (!name || isNaN(hours) || hours < 0) {
        alert("Please enter valid employee details.");
        return;
    }

    const newEmployee = { name, role, hours };
    employees.push(newEmployee);
    renderEmployeeTable();
    clearForm();
}

// Render employee table
function renderEmployeeTable() {
    const tableBody = document.getElementById("employeeTableBody");
    tableBody.innerHTML = ""; // Clear table before re-rendering

    employees.forEach((employee, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.role}</td>
            <td>${employee.hours}</td>
            <td>
                <button class="delete" onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Delete employee function
function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployeeTable();
}

// Clear form fields
function clearForm() {
    document.getElementById("employeeName").value = "";
    document.getElementById("employeeRole").value = "Admin";
    document.getElementById("workingHours").value = "";
}
