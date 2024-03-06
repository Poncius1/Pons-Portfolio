import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

const LoadingScreen = ({ setStarted }) => {
  const { progress } = useProgress();
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setFadeout(true);
      const delay = 2000;

      // Agrega la clase para iniciar la animación de desvanecimiento

      // Espera un tiempo antes de cambiar el estado `started`
      const timeoutId = setTimeout(() => {
        setStarted(true);
      }, delay);

      // Limpia el temporizador al desmontar el componente
      return () => clearTimeout(timeoutId);
    }
  }, [progress, setStarted]);

  return (
    <div className={`main-container ${fadeout ? 'fadeout' : ''}`}>
      <div className="spinner-loader"></div>
      <div className="text-loader"></div>
    </div>
  );
};

export default LoadingScreen;
