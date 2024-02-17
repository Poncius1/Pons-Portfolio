import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import games from './games';

const GameDescription = () => {
  const { id } = useParams();
  const game = games.find(g => g.id === parseInt(id));
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/gamelist');
  }

  return (
    <div>
      <h2>Game Description</h2>
      <p>{game ? game.description : 'Description not found.'}</p>
      <button onClick={handleGoBack}>Go Back to Game List</button>
    </div>
  );
}

export default GameDescription;
