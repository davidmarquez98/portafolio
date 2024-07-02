import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LocationWatcher = ({ setLocation }) => {
  const location = useLocation();

  useEffect(() => {
    setLocation(location.pathname);
  }, [location, setLocation]);

  return null; // Este componente no necesita renderizar nada
};

export default LocationWatcher;