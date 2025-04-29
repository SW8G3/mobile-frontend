import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [route, setRoute] = useState([]);

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

// Add PropTypes validation for the children prop
RouteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useRoute() {
  return useContext(RouteContext);
}