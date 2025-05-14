const WayfinderLogo = (props) => (
  <svg
    width="140"
    height="55"
    viewBox="0 0 300 120"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <rect width="300" height="120" rx="20" fill="#005EB8" />
    <circle cx="60" cy="60" r="40" fill="white" />
    <path d="M60 30 L75 90 L60 75 L45 90 Z" fill="#005EB8" />
    <text
      x="130"
      y="70"
      fontFamily="Arial, sans-serif"
      fontSize="32"
      fill="white"
    >
      Wayfinder
    </text>
  </svg>
);

export default WayfinderLogo;
