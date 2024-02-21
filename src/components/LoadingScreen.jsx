import React, { useEffect } from 'react';
import { useProgress } from '@react-three/drei';

const LoadingScreen = ({ setStarted }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      // Agrega un delay de 1000 milisegundos (1 segundo) antes de cambiar el estado
      const delay = 3000;
      const timeoutId = setTimeout(() => {
        setStarted(true);
      }, delay);

      // Limpia el timeout cuando el componente se desmonta
      return () => clearTimeout(timeoutId);
    }
  }, [progress, setStarted]);

  return (
    <>
      <div className="main-container">
        <div className="spinner-loader"></div>
        <div className="text-loader"></div>
      </div>
    </>
  );
};

export default LoadingScreen;
