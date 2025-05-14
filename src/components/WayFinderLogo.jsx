/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import '@fontsource/lexend/600.css';

const WayFinderLogo = ({ size = 0.8 }) => {
    const navigate = useNavigate();

    // Base dimensions for the SVG (at size = 1)
    const baseWidth = 300;
    const baseHeight = 120;
    
    // Calculate dynamic dimensions based on size prop
    const width = baseWidth * size;
    const height = baseHeight * size;
    const fontSize = 2.5 * size + 'rem';
    const circleRadius = 30 * size;
    const cornerRadius = 20 * size;

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
                maxWidth: '80vw',
                maxHeight: '20vh'
            }}
            aria-label="Wayfinder Logo"
        >
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${baseWidth} ${baseHeight}`}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <rect 
                    width={baseWidth}
                    height={baseHeight}
                    rx={cornerRadius}
                    fill="#211a52" 
                />
                <circle 
                    cx="50" 
                    cy="60" 
                    r={circleRadius} 
                    fill="white" 
                />
                <path
                    d="M50 35 L60 85 L50 70 L40 85 Z"
                    fill="#211a52" 
                />
                <text
                    x="100"
                    y="60"
                    fontFamily="Lexend"
                    fontSize={fontSize}
                    fill="white"
                    dominantBaseline="middle"
                    textAnchor="start"
                >
                    Wayfinder
                </text>
            </svg>
        </button>
    );
};

export default WayFinderLogo;