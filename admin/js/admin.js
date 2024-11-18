// JavaScript Document// admin.js

// Example data to simulate server response (replace with real API calls)
const users = [
    { username: 'johnDoe', email: 'john@example.com', role: 'player' },
    { username: 'adminUser', email: 'admin@example.com', role: 'admin' }
];

const tournaments = [
    { name: '1v1 Championship', status: 'Active' },
    { name: 'Summer Team Cup', status: 'Completed' }
];

const reports = [
    { user: 'johnDoe', reason: 'Cheating', date: '2024-10-10' },
    { user: 'player123', reason: 'Abusive Language', date: '2024-10-11' }
];

// Function to dynamically load users
function loadUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="btn btn-primary" onclick="editUser('${user.username}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser('${user.username}')">Delete</button>
            </td>
        `;
        userList.appendChild(row);
    });
}

// Function to edit a user
function editUser(username) {
    const user = users.find(u => u.username === username);
    document.getElementById('username').value = user.username;
    document.getElementById('email').value = user.email;
    document.getElementById('role').value = user.role;
    
    // Show modal
    const editUserModal = new bootstrap.Modal(document.getElementById('editUserModal'));
    editUserModal.show();
}

// Function to delete a user
function deleteUser(username) {
    if (confirm(`Are you sure you want to delete ${username}?`)) {
        // Perform deletion operation
        alert(`${username} has been deleted.`);
        // Reload user list after deletion
        loadUsers();
    }
}

// Similar functions for tournaments and reports (loadTournaments, deleteTournament, etc.)

document.addEventListener('DOMContentLoaded', function() {
    loadUsers();
    loadTournaments();
    loadReports();
});
