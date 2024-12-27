// Sample service list
let services = [
    { name: "Spa Service", price: 500 },
    { name: "Laundry Service", price: 200 },
    { name: "Room Decoration", price: 300 },
];

let serviceRequests = [];

// Render service list
function renderServiceList() {
    const serviceTable = document.getElementById("serviceTableBody");
    serviceTable.innerHTML = "";

    services.forEach((service, index) => {
        const row = `
            <tr>
                <td>${service.name}</td>
                <td>$${service.price}</td>
                <td>
                    <button class="request" onclick="requestService('${service.name}', ${service.price})">Request</button>
                    <button class="delete" onclick="deleteService(${index})">Delete</button>
                </td>
            </tr>
        `;
        serviceTable.innerHTML += row;
    });
}

// Render service requests
function renderServiceRequests() {
    const requestTable = document.getElementById("requestTableBody");
    requestTable.innerHTML = "";

    serviceRequests.forEach((request, index) => {
        const row = `
            <tr>
                <td>${request.customer}</td>
                <td>${request.serviceName}</td>
                <td>$${request.price}</td>
                <td>${request.status}</td>
                <td>
                    <button class="delete" onclick="deleteRequest(${index})">Delete</button>
                </td>
            </tr>
        `;
        requestTable.innerHTML += row;
    });
}

// Open Add Service Modal
function openAddServiceModal() {
    document.getElementById("addServiceModal").style.display = "flex";
}

// Close Add Service Modal
function closeAddServiceModal() {
    document.getElementById("addServiceModal").style.display = "none";
}

// Add Service
function addService() {
    const serviceName = document.getElementById("serviceName").value;
    const servicePrice = document.getElementById("servicePrice").value;

    if (serviceName && servicePrice) {
        services.push({ name: serviceName, price: parseInt(servicePrice) });
        renderServiceList();
        closeAddServiceModal();
    } else {
        alert("Please enter valid details.");
    }
}

// Request Service
function requestService(serviceName, price) {
    const customerName = prompt("Enter customer name:");
    if (customerName) {
        serviceRequests.push({
            customer: customerName,
            serviceName: serviceName,
            price: price,
            status: "Pending",
        });
        renderServiceRequests();
    }
}

// Delete Service
function deleteService(index) {
    services.splice(index, 1);
    renderServiceList();
}

// Delete Request
function deleteRequest(index) {
    serviceRequests.splice(index, 1);
    renderServiceRequests();
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
    renderServiceList();
    renderServiceRequests();
});
