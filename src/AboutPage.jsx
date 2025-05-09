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
                <img src="/images/aaulogo.png" alt="Aalborg University" style={{ height: '40px' }} />
                <img src="/images/reactlogo.png" alt="React" style={{ height: '40px' }} />
                <img src="/images/expologo.png" alt="Expo" style={{ height: '40px' }} />
                <img src="/images/prismalogo.jpg" alt="Prisma" style={{ height: '40px' }} />
            </div>
        </div>
    );
};
export default AboutPage;
