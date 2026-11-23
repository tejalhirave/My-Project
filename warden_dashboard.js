// Sample data
let rooms = [
    { name: 'Room 101', students: ['Alice', 'Bella'] },
    { name: 'Room 102', students: ['Cathy'] },
];

let applications = [
    { student: 'Alice', type: 'Leave', reason: 'Family Function', status: 'Pending' },
    { student: 'Bella', type: 'Admission', reason: 'New Admission', status: 'Pending' },
];

function openSection(section) {
    const container = document.getElementById('sectionContainer');
    let html = '';

    if (section === 'announcement') {
        html = `
        <h2>Announcements by Warden</h2>
        <div class="announcement">
            <h3>Hostel Maintenance</h3>
            <p>Water supply will be unavailable from 10 AM to 2 PM on 25th Sept.</p>
        </div>
        <div class="announcement">
            <h3>Event Notice</h3>
            <p>Annual hostel cultural event will be held on 5th October in the main hall.</p>
        </div>`;
    } else if (section === 'rooms') {
        html = `<h2>Rooms Management</h2>
        <button class="add-room-btn" onclick="addRoom()">Add Room</button>`;
        rooms.forEach((room, index) => {
            html += `
            <div class="room" onclick="viewRoom(${index})">
                <h3>${room.name}</h3>
                <p>Students: ${room.students.length}</p>
            </div>`;
        });
    } else if (section === 'applications') {
        html = `<h2>Student Applications</h2>`;
        applications.forEach((app, index) => {
            html += `
            <div class="application">
                <h4>${app.student} - ${app.type}</h4>
                <p>Reason: ${app.reason}</p>
                <p>Status: ${app.status}</p>
                ${app.status === 'Pending' ? `
                <button class="action-btn" onclick="approveApplication(${index})">Approve</button>
                <button class="action-btn" onclick="rejectApplication(${index})">Reject</button>` : ''}
            </div>`;
        });
    }

    container.innerHTML = html;
}

// Rooms functions
function addRoom() {
    const roomName = prompt("Enter Room Name:");
    if (roomName) {
        rooms.push({ name: roomName, students: [] });
        openSection('rooms');
    }
}

function viewRoom(index) {
    const room = rooms[index];
    let studentList = room.students.length > 0 ? room.students.join(', ') : 'No students yet';
    alert(`${room.name}\nNumber of Girls: ${room.students.length}\nNames: ${studentList}`);
}

// Applications functions
function approveApplication(index) {
    applications[index].status = 'Approved';
    openSection('applications');
}

function rejectApplication(index) {
    applications[index].status = 'Rejected';
    openSection('applications');
}

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    alert("You have been logged out.");
    window.location.href = "login.html";
});
