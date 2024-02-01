import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const LoadingScreen = () => {
  const { progress } = useProgress();
  const roundedProgress = Math.round(Math.min(progress, 100));

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
