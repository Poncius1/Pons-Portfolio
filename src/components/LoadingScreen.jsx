import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

const LoadingScreen = ({ setStarted }) => {
  const { progress } = useProgress();
  const [fadeout, setFadeout] = useState(false);

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
    <div className={`main-container ${progress === 100 ? 'fadeout' : ''}`}>
      <div className="spinner-loader"></div>
      <div className="text-loader"></div>
    </div>
  );
};

export default LoadingScreen;
