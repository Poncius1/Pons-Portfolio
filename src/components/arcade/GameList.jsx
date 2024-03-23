
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carroussel from './Carroussel';
import Card from './Card';


const GameList = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  }

  let cards = [
    {
      key: 1,
      content: (
        <Card imagen="https://img.itch.zone/aW1nLzE0ODYwMjkzLnBuZw==/315x250%23c/LcBN20.png"
        title="Genetic Chaos"
        paragraph="Protects the Mother cell from bado and nano the bad mutations." 
        linkPlay="https://poncius35.itch.io/genetic-chaos"/>
      )
    },
    {
      key: 2,
      content: (
        <Card imagen="https://img.itch.zone/aW1nLzE0NDUwNjQ2LnBuZw==/315x250%23c/b7fpnz.png"
        title="AimingForXmas"
        paragraph="A game set on Christmas Eve where your mission is to deliver Santa's gifts to the children."
        linkPlay= "https://poncius35.itch.io/aimingforchrismas" />
      )
    },
    {
      key: 3,
      content: (
        <Card imagen="https://img.itch.zone/aW1nLzE0MTc3ODAzLmpwZw==/315x250%23c/Gu9gNa.jpg"
        title="For The Raksha"
        paragraph="Immerse yourself in a magical and mysterious world where magic and adventure converge." 
        linkPlay="https://poncius35.itch.io/fortheraksha"
        linkCode="https://github.com/Poncius1/ForTheRaksha"/>
      )
    },
    {
      key: 4,
      content: (
        <Card imagen="https://img.itch.zone/aW1nLzExMzc3OTY2LnBuZw==/315x250%23c/DR44DT.png"
        title="Mine A Mole"
        paragraph="Blind mole who can see INVISIBLE objects that will help him save his life with his SUPER COOL GLASSES"
        linkPlay="https://amordibuja.itch.io/mine-a-mole"
        linkCode="https://github.com/Poncius1/Mine-A-Mole" />
      )
    },
    {
      key: 5,
      content: (
        <Card imagen="https://img.itch.zone/aW1nLzc3NjUzMTkucG5n/315x250%23c/8UoYLX.png"
        title="B For Boxes"
        paragraph="​A box labelling game."
        linkPlay="https://amordibuja.itch.io/b-for-boxes"/>
      )
    },
    {
      key: 6,
      content: (
        <Card imagen="https://img.itch.zone/aW1nLzEwNjU5NjgzLnBuZw==/315x250%23c/4SpfUK.png"
        title="Whiskers"
        paragraph="Whiskers is a game about being a cat."
        linkPlay="https://poncius35.itch.io/whiskers"
        linkCode="https://github.com/Poncius1/GameOFF"
        />
      )
    }
  ];

  return (
    
    <div className="games-container">
      <Carroussel
        cards={cards}
        height="80px"
        width="80%"
        margin="0 auto"
        offset={200}
        showArrows={false}
        
      />
      
    </div>
     
    
  );
}

export default GameList;


