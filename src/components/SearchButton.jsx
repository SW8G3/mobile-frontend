import React from 'react';

const SearchButton = ({ children, onClick, style = {} }) => {
  const buttonStyles = {
    width: '12rem',
    height: '3em',
    fontSize: '1.5rem',
    fontWeight: '500',
    backgroundColor: 'rgba(62, 103, 175, 1)',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    fontFamily: 'Lexend',
    ...style, // Allow for style overrides
  };

  return (
    <button onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  );
};

export default SearchButton;