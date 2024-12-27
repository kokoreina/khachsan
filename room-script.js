// Room Type Management
function addRoomType() {
    const roomTypeInput = document.getElementById('roomTypeInput');
    const roomTypeList = document.getElementById('roomTypeList');

    if (roomTypeInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = roomTypeInput.value;
        roomTypeList.appendChild(li);
        roomTypeInput.value = "";
    } else {
        alert("Please enter a room type!");
    }
}

// Update Room Status and Log to History
function updateRoomStatus(selectElement, roomNumber) {
    const statusSpan = selectElement.parentElement.parentElement.querySelector('.status');
    const newStatus = selectElement.value;

    // Update the room status in the table
    statusSpan.textContent = newStatus;

    // Log history
    logHistory(`Room ${roomNumber} status changed to ${newStatus}`);
}

function logHistory(message) {
    const historyList = document.getElementById('historyList');
    const li = document.createElement('li');
    const now = new Date();
    li.textContent = `${now.toLocaleString()}: ${message}`;
    historyList.appendChild(li);
}
