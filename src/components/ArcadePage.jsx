// ArcadePage.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './arcade/Home';
import GameList from './arcade/GameList';
import GameDescription from './arcade/GameDescription';


const ArcadePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamelist" element={<GameList />} />
        <Route path="/gamedescription/:id" element={<GameDescription />} />
      </Routes>
    </Router>
  );
}

export default ArcadePage;
