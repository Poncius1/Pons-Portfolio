import React, { Suspense, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Experience from './components/Experience';
import StartSection from './components/StartSection';
import SocialButtons from './components/SocialButtons';
import ContactForm from './components/ContactForm';
import './styles/main.css';
import './styles/startsection.css';
import './styles/contactform.css';
import "./styles/card.css";
import "./styles/arcade.css";



const App = () => {
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
    <Suspense fallback={<LoadingScreen/>}>
     {<Experience setShowStartSection={setShowStartSection} />}
      {showContactForm && <ContactForm hideForm={hideContactForm} />}
      {showStartSection && <StartSection contactButton={contactButton} />}
      { <SocialButtons />}

    </Suspense>
    </>
  );
};

export default App;
