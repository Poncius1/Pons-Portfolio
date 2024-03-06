import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Experience from './components/Experience';
import StartSection from './components/StartSection';
import SocialButtons from './components/SocialButtons';
import './styles/main.css';
import './styles/startsection.css'

const App = () => {
  const [started, setStarted] = useState(false);
  const [showStartSection, setShowStartSection] = useState(true);

  return (
    <>
    {!started && <LoadingScreen setStarted={setStarted} />}
    <Experience setShowStartSection={setShowStartSection} />
    {started && showStartSection && <StartSection />}
    {started && <SocialButtons />}
  </>
  );
};

export default App;
