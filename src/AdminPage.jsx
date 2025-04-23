import React from 'react';

const AdminPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Page</h1>
            <h2>Attention: This is just a test page.</h2>  
            <p>Welcome to the admin panel. Use the navigation to manage the application.</p>
                      
            <div style={{ marginTop: '20px' }}>
                <h2>Quick Actions</h2>
                <ul>
                    <li>Manage Users</li>
                    <li>View Reports</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminPage;