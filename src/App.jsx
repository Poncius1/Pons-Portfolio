import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Experience from './components/Experience';
import StartSection from './components/StartSection';
import SocialButtons from './components/SocialButtons';
import './styles/main.css';

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started && <LoadingScreen setStarted={setStarted} />}
      <Experience />
      {started && (
        <>
          <StartSection />
          <SocialButtons />
        </>
      )}
    </>
  );
};

export default App;
