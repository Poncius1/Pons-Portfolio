
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import games from './games';

const GameList = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  }

  return (
    <div>
      <h2>MY GAMES</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <Link to={`/gamedescription/${game.id}`}>{game.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
}

export default GameList;
