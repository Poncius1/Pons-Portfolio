// GameList.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GameList = () => {
  const games = [
    { id: 1, title: 'Game 1' },
    { id: 2, title: 'Game 2' },
    { id: 3, title: 'Game 3' },
  ];

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  }

  return (
    <div>
      <h2>Game List</h2>
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
