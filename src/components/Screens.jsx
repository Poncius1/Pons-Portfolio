import React from 'react';
import { PcScreen } from './Screens/PcScreen'
import { MeScreens } from './Screens/MeScreens'
import { Arcade } from './Screens/Arcade'

const Screens = ({ setShowStartSection }) => {

  

  return (
    <>
    <PcScreen setShowStartSection={setShowStartSection} />
    <MeScreens />
    <Arcade setShowStartSection={setShowStartSection} />
    </>
  )
}

export default Screens