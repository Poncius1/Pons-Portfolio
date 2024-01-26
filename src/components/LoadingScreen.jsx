
import React from 'react';
import { Html, useProgress } from '@react-three/drei';
const LoadingScreen = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="spinner-loader"></div>
      <div className="text-loader">
      </div>
    </Html>
  );
};

export default LoadingScreen;
