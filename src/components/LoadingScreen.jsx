import React, { useEffect } from 'react';
import { useProgress } from '@react-three/drei';

const LoadingScreen = ({ setStarted }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
  
      const delay = 2000;
      const timeoutId = setTimeout(() => {
        setStarted(true);
      }, delay);

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
