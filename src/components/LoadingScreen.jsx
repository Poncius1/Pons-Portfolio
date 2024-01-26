
import React from 'react';
import { Html } from '@react-three/drei';

const LoadingScreen = () => {
  return (
    <Html center>
      <div className="spinner-loader"></div>
      <div className="text-loader">
      </div>
    </Html>
  );
};

export default LoadingScreen;
