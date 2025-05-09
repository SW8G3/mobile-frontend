/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import '@fontsource/lexend/600.css'; // Defaults to weight 400

const WayfinderLogo = ({ width = '100%', height = '100%', maxWidth = '80vw', maxHeight = '10vh' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <button
            onClick={handleClick}
            style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'inline-block',
            }}
        >
            <svg
                style={{ width, height, maxWidth, maxHeight }}
                viewBox="0 0 300 120"
                xmlns="http://www.w3.org/2000/svg">
                <rect 
                    width="300"
                    height="120"
                    rx="20"
                    fill="#211a52" />
                <circle 
                    cx="50" 
                    cy="60" 
                    r="30" 
                    fill="white" />
                <path
                    d="M50 35 L60 85 L50 70 L40 85 Z"
                    fill="#211a52" />
                <text
                    x="100"
                    y="60"
                    fontFamily="Lexend"
                    fontSize="2.5rem"
                    fill="white"
                    dominantBaseline="middle"
                    textAnchor="start">Wayfinder</text>
            </svg>
        </button>
    );
};

export default WayfinderLogo;