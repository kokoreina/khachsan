function calculateTotal() {
    const roomType = document.getElementById("roomType");
    const checkInDate = new Date(document.getElementById("checkInDate").value);
    const checkOutDate = new Date(document.getElementById("checkOutDate").value);
    const depositPercentage = parseFloat(document.getElementById("deposit").value);

    if (isNaN(checkInDate) || isNaN(checkOutDate) || checkOutDate <= checkInDate) {
        alert("Please select valid check-in and check-out dates.");
        return;
    }

    // Get room price from selected option
    const roomPrice = parseFloat(roomType.options[roomType.selectedIndex].dataset.price);

    // Calculate the number of days
    const timeDiff = checkOutDate - checkInDate;
    const numberOfDays = timeDiff / (1000 * 3600 * 24);

    // Calculate total and deposit
    const totalAmount = numberOfDays * roomPrice;
    const depositAmount = (totalAmount * depositPercentage) / 100;

    // Display booking summary
    const summaryDetails = `
        <strong>Customer Name:</strong> ${document.getElementById("customerName").value} <br>
        <strong>Room Type:</strong> ${roomType.value} <br>
        <strong>Check-in Date:</strong> ${checkInDate.toDateString()} <br>
        <strong>Check-out Date:</strong> ${checkOutDate.toDateString()} <br>
        <strong>Total Days:</strong> ${numberOfDays} <br>
        <strong>Total Amount:</strong> $${totalAmount.toFixed(2)} <br>
        <strong>Deposit (${depositPercentage}%):</strong> $${depositAmount.toFixed(2)}
    `;
    document.getElementById("summaryDetails").innerHTML = summaryDetails;
}

function confirmBooking() {
    const customerName = document.getElementById("customerName").value;
    if (!customerName) {
        alert("Please fill in the customer name.");
        return;
    }
    alert(`Booking for ${customerName} has been confirmed!`);
}
