/* eslint-disable react/prop-types */
import 'react';

const WayfinderLogo = ({ width = 150, height = 60 }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 150 60"
        xmlns="http://www.w3.org/2000/svg">
        <rect 
            width="300"
            height="120"
            rx="20"
            fill="#005EB8" />
        <circle 
            cx="60" 
            cy="60" 
            r="40" 
            fill="white" />
        <path
            d="M60 30 L75 90 L60 75 L45 90 Z"
            fill="#005EB8" />
        <text
            x="130"
            y="70"
            fontFamily="Monaco, Monospace"
            fontSize="32"
            fill="white">Home</text>
    </svg>
);

export default WayfinderLogo;