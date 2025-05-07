import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import an icon from react-icons

const AboutPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            {/* Header-style Go Back Icon Button */}
            <div style={{
                width: '100%',
                maxWidth: '360px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem 0',
            }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: '#333',
                    }}
                >
                    <FaArrowLeft />
                </button>
            </div>

            <h1>About This Project</h1>
            <p>
                This project was developed as part of the 8th semester in the Software Engineering Master&apos;s program at Aalborg University Copenhagen.</p>
                <p>It is a mobile-first web application built using React with React Router for navigation. The backend is implemented with Node.js and Express, and Prisma is used as an ORM for database interactions. The application is designed with scalability and modularity in mind, reflecting modern full-stack development practices.
            </p>
            <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0' }}>
                <img src="/logos/aalborg.png" alt="Aalborg University" style={{ height: '40px' }} />
                <img src="/logos/react.png" alt="React" style={{ height: '40px' }} />
                <img src="/logos/expo.png" alt="Expo" style={{ height: '40px' }} />
                <img src="/logos/prisma.png" alt="Prisma" style={{ height: '40px' }} />
            </div>
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