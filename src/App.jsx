import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Experience from './components/Experience';
import StartSection from './components/StartSection';
import SocialButtons from './components/SocialButtons';
import ContactForm from './components/ContactForm';
import './styles/main.css';
import './styles/startsection.css';
import './styles/contactform.css';

const App = () => {
  const [started, setStarted] = useState(false);
  const [showStartSection, setShowStartSection] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  const contactButton = () => {
    setShowStartSection(false);
    setShowContactForm(true);
  };

  const hideContactForm = () => {
    setShowStartSection(true);
    setShowContactForm(false);
  };

  return (
    <>
      {!started && <LoadingScreen setStarted={setStarted} />}
      {started && <Experience />}
      {started && showContactForm && <ContactForm hideForm={hideContactForm} />}
      {started && showStartSection && <StartSection contactButton={contactButton} />}
      {started && <SocialButtons />}
    </>
  );
};

export default App;
