import React from 'react';

const AboutPage = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>About This Project</h1>
            <p>
                This project was created to solve a common problem and provide a better solution for users. 
                It started as a small idea and grew into a full-fledged application thanks to the dedication 
                and hard work of the team.
            </p>
            <h2>Meet the Team</h2>
            <p>
                This project was brought to life by a group of passionate developers and designers:
            </p>
            <ul>
                <li>Mister Programmer - Lead Developer</li>
                <li>John Doe - UX/UI Designer</li>
                <li>Jane Smith - Backend Engineer</li>
                <li>Michael Brown - Project Manager</li>
            </ul>
            <p>
                We hope you enjoy using this application as much as we enjoyed building it!
            </p>
        </div>
    );
};

export default AboutPage;