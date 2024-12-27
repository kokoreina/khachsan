// Sample customer data
let customers = [
    { name: "Nguyen Van A", phone: "0912345678", email: "a@example.com", stayHistory: "3 times", feedback: "" },
    { name: "Tran Thi B", phone: "0987654321", email: "b@example.com", stayHistory: "5 times", feedback: "" },
    { name: "Le Van C", phone: "0977123456", email: "c@example.com", stayHistory: "2 times", feedback: "" }
];

let currentCustomerIndex = null;

// Render customer table
function renderCustomerTable() {
    const tableBody = document.getElementById("customerTableBody");
    tableBody.innerHTML = ""; // Clear table before re-rendering

    customers.forEach((customer, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.email}</td>
            <td>${customer.stayHistory}</td>
            <td>${customer.feedback || "No feedback yet"}</td>
            <td>
                <button class="feedback" onclick="openModal(${index})">Feedback</button>
                <button class="delete" onclick="deleteCustomer(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Open feedback modal
function openModal(index) {
    currentCustomerIndex = index;
    document.getElementById("customerName").innerText = customers[index].name;
    document.getElementById("feedbackText").value = customers[index].feedback;
    document.getElementById("feedbackModal").style.display = "flex";
}

// Close feedback modal
function closeModal() {
    document.getElementById("feedbackModal").style.display = "none";
}

// Submit feedback
function submitFeedback() {
    const feedback = document.getElementById("feedbackText").value;

    if (currentCustomerIndex !== null) {
        customers[currentCustomerIndex].feedback = feedback;
        renderCustomerTable();
        closeModal();
    }
}

// Delete customer
function deleteCustomer(index) {
    if (confirm("Are you sure you want to delete this customer?")) {
        customers.splice(index, 1);
        renderCustomerTable();
    }
}

// Initial table render
document.addEventListener("DOMContentLoaded", renderCustomerTable);
