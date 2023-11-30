import React from 'react';
import '../src/BOARD/Hexboard.css';
import HexGrid from '../src/BOARD/Hexgrid';
import Hexagon from './BOARD/Hex';

const App = () => {
  const imageUrl = 'https://opengameart.org/sites/default/files/grass_15.png'; 

  return (
    <div className="App">
      <Hexagon/>
    </div>
  );
};

export default App;