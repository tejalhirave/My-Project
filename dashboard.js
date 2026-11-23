function openSection(section) {
    const container = document.getElementById('sectionContainer');
    let html = '';

    if (section === 'admission') {
        html = `
        <h2>Admission Form</h2>
        <div class="tabs">
            <button class="tab-btn active" onclick="openTab(event, 'profile')">Profile Details</button>
            <button class="tab-btn" onclick="openTab(event, 'room')">Room Allocation</button>
            <button class="tab-btn" onclick="openTab(event, 'payment')">Payment</button>
        </div>

        <div id="profile" class="tab-content active">
            <form>
                <input type="text" placeholder="Full Name" required>
                <input type="date" placeholder="Date of Birth" required>
                <input type="text" placeholder="Year of Admission" required>
                <input type="text" placeholder="Aadhar Card Number" required>
                <input type="text" placeholder="Personal Phone Number" required>
                <input type="text" placeholder="Parent's Phone Number" required>
                <input type="text" placeholder="Study Year (e.g., 1st Year)" required>
                <textarea placeholder="Address" rows="3" required></textarea>
                <label for="photoUpload">Upload Photo:</label>
                <input type="file" id="photoUpload" accept="image/*" required>
                <button class="submit-btn" type="submit">Save Profile</button>
            </form>
        </div>

        <div id="room" class="tab-content">
            <form>
                <input type="text" placeholder="Room Preference" required>
                <input type="text" placeholder="Floor Preference" required>
                <button class="submit-btn" type="submit">Save Room</button>
            </form>
        </div>

        <div id="payment" class="tab-content">
            <form>
                <input type="text" placeholder="Card Number" required>
                <input type="text" placeholder="Expiry Date" required>
                <input type="text" placeholder="CVV" required>
                <button class="submit-btn" type="submit">Make Payment</button>
            </form>
        </div>`;
    } else if (section === 'complaint') {
        html = `
        <h2>Complaint Box</h2>
        <form>
            <input type="text" placeholder="Subject" required>
            <textarea placeholder="Write your complaint..." rows="5" required></textarea>
            <button class="submit-btn" type="submit">Submit Complaint</button>
        </form>`;
    } else if (section === 'leave') {
        html = `
        <h2>Leave Application</h2>
        <form>
            <label for="studentName">Student Name:</label>
            <input type="text" id="studentName" placeholder="Full Name" required>

            <label for="studyYear">Study Year:</label>
            <input type="text" id="studyYear" placeholder="e.g., 1st Year" required>

            <label for="reason">Reason for Leave:</label>
            <textarea id="reason" placeholder="Write the reason for leave..." rows="4" required></textarea>

            <label for="startDate">Start Date:</label>
            <input type="date" id="startDate" required>

            <label for="endDate">End Date:</label>
            <input type="date" id="endDate" required>

            <label for="parentPhone">Parent's Phone Number:</label>
            <input type="text" id="parentPhone" placeholder="Enter parent's phone number" required>

            <button class="submit-btn" type="submit">Submit Leave Application</button>
        </form>`;
    } else if (section === 'announcement') {
        html = `
        <h2>Announcements by Warden</h2>
        <div class="announcement">
            <h3>Hostel Maintenance</h3>
            <p>Water supply will be unavailable from 10 AM to 2 PM on 25th Sept.</p>
        </div>
        <div class="announcement">
            <h3>Guest Policy Update</h3>
            <p>No overnight guests are allowed from 1st October due to safety protocols.</p>
        </div>
        <div class="announcement">
            <h3>Event Notice</h3>
            <p>Annual hostel cultural event will be held on 5th October in the main hall.</p>
        </div>`;
    }

    container.innerHTML = html;
}

// Tabs functionality
function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    alert("You have been logged out.");
    window.location.href = "login.html"; 
});
