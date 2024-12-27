// Calculate Invoice Function
function calculateInvoice() {
    const roomSelect = document.getElementById("roomNumber");
    const roomRate = parseFloat(roomSelect.options[roomSelect.selectedIndex].dataset.rate);

    const numDays = parseInt(document.getElementById("numDays").value);
    const serviceCost = parseFloat(document.getElementById("services").value || 0);

    if (isNaN(numDays) || numDays <= 0) {
        alert("Please enter a valid number of days.");
        return;
    }

    // Calculate Costs
    const roomCost = roomRate * numDays;
    const totalCost = roomCost + serviceCost;

    // Update Invoice Table
    document.getElementById("roomCost").textContent = roomCost.toFixed(2);
    document.getElementById("serviceCost").textContent = serviceCost.toFixed(2);
    document.getElementById("totalCost").textContent = totalCost.toFixed(2);

    // Show Invoice Result
    document.getElementById("invoiceResult").style.display = "block";
}

// Send Invoice Function
function sendInvoice() {
    const customerName = document.getElementById("customerName").value;
    const totalCost = document.getElementById("totalCost").textContent;

    if (!customerName || totalCost == "0") {
        alert("Please calculate the invoice first and enter customer name.");
        return;
    }

    alert(`Invoice sent to ${customerName}.\nTotal: $${totalCost}`);
}
