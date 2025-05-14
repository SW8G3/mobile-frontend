import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import an icon from react-icons
// import { Header } from '@react-navigation/stack';
import Header from './components/header'; // Import the Header component
const AboutPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    return (
        
        <div style={{...styles.background, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            {/* Header-style Go Back Icon Button */}
            <Header />
            {/* <div style={{
                width: '100%',
                maxWidth: '360px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem 0',
            }}>
            </div> */}
            <div style={{...styles.text, width: '100%'}}>
            <h1>About This Project</h1>
            <p>
                This project was developed as part of the 8th semester in the Software Engineering Master&apos;s program at Aalborg University Copenhagen.</p>
                <p>It is a mobile-first web application built using React with React Router for navigation. The backend is implemented with Node.js and Express, and Prisma is used as an ORM for database interactions. The application is designed with scalability and modularity in mind, reflecting modern full-stack development practices.
            </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0' }}>
                <img src="/images/aaulogo.png" alt="Aalborg University" style={{ height: '40px' }} />
                <img src="/images/reactlogo.png" alt="React" style={{ height: '40px' }} />
                <img src="/images/prismalogo.jpg" alt="Prisma" style={{ height: '40px' }} />
            </div>
            
        </div>
    );
};
const styles = {
    text: {
       color: 'black',
       margin: '2rem',
    },
    background: {
        backgroundColor: 'white'
        
    }
};
export default AboutPage;
