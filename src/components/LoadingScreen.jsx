import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const LoadingScreen = () => {
  const { progress } = useProgress();
  const roundedProgress = Math.floor(Math.min(progress, 1) * 100);

  return (
    <Html center>
      <div className="spinner-loader"></div>
      <div className="text-loader">
        {roundedProgress}%
      </div>
    </Html>
  );
};

export default LoadingScreen;
