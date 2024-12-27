// Sample Data
const revenueData = {
    "2024-06": 50000,
    "2024-07": 65000,
    "2024-08": 70000
};

const serviceUsageData = {
    "2024-06": [
        { serviceName: "Spa", count: 30, total: 15000 },
        { serviceName: "Laundry", count: 50, total: 10000 },
    ],
    "2024-07": [
        { serviceName: "Room Decoration", count: 20, total: 12000 },
        { serviceName: "Laundry", count: 60, total: 12000 },
    ],
    "2024-08": [
        { serviceName: "Spa", count: 40, total: 20000 },
        { serviceName: "Room Decoration", count: 30, total: 18000 },
    ],
};

// Generate Revenue Report
function generateRevenueReport() {
    const month = document.getElementById("revenueMonth").value;
    const revenueResult = document.getElementById("revenueResult");

    if (revenueData[month]) {
        revenueResult.innerHTML = `
            <h3>Revenue for ${month}</h3>
            <p><strong>Total Revenue:</strong> $${revenueData[month]}</p>
        `;
    } else {
        revenueResult.innerHTML = "<p>No data available for the selected month.</p>";
    }
}

// Generate Service Usage Report
function generateServiceReport() {
    const month = document.getElementById("serviceMonth").value;
    const serviceResult = document.getElementById("serviceResult");

    if (serviceUsageData[month]) {
        let tableContent = `
            <h3>Service Usage for ${month}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Usage Count</th>
                        <th>Total Revenue</th>
                    </tr>
                </thead>
                <tbody>
        `;

        serviceUsageData[month].forEach(service => {
            tableContent += `
                <tr>
                    <td>${service.serviceName}</td>
                    <td>${service.count}</td>
                    <td>$${service.total}</td>
                </tr>
            `;
        });

        tableContent += `</tbody></table>`;
        serviceResult.innerHTML = tableContent;
    } else {
        serviceResult.innerHTML = "<p>No data available for the selected month.</p>";
    }
}
