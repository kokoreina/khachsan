// Dummy data for room status
const rooms = [
    { id: 1, status: "available" },
    { id: 2, status: "occupied" },
    { id: 3, status: "reserved" },
    { id: 4, status: "available" },
    { id: 5, status: "occupied" },
    { id: 6, status: "reserved" },
    { id: 7, status: "available" },
    { id: 8, status: "available" }
];

// Function to load rooms into the grid
function loadRooms() {
    const roomGrid = document.getElementById("roomGrid");
    roomGrid.innerHTML = ""; // Clear previous content

    rooms.forEach((room) => {
        const roomDiv = document.createElement("div");
        roomDiv.classList.add("room", room.status);
        roomDiv.textContent = `Room ${room.id}`;
        roomDiv.onclick = () => selectRoom(room);
        roomGrid.appendChild(roomDiv);
    });
}

// Function to select a room for booking
function selectRoom(room) {
    if (room.status !== "available") {
        alert(`Room ${room.id} is not available for booking.`);
        return;
    }
    document.getElementById("selectedRoom").value = `Room ${room.id}`;
}

// Function to book a room
function bookRoom() {
    const selectedRoom = document.getElementById("selectedRoom").value;
    const customerName = document.getElementById("customerName").value;
    const bookingDays = document.getElementById("bookingDays").value;

    if (!selectedRoom || !customerName || !bookingDays) {
        alert("Please fill in all fields.");
        return;
    }

    const roomId = parseInt(selectedRoom.split(" ")[1]);
    const room = rooms.find((r) => r.id === roomId);

    if (room && room.status === "available") {
        room.status = "reserved"; // Update room status
        alert(`Room ${room.id} has been reserved for ${customerName} for ${bookingDays} days.`);
        loadRooms(); // Refresh room grid
    } else {
        alert("Something went wrong. Please try again.");
    }
}

// Load rooms on page load
window.onload = loadRooms;
