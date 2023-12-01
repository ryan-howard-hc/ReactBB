import React from 'react';
import '../src/BOARD/Hexboard.css';
import HexGrid from '../src/BOARD/Hexgrid';
import HexBoard from '../src/BOARD/Hex';
import ZoomableContent from './ZoomInOut';
const App = () => {
  const imageUrl = 'https://opengameart.org/sites/default/files/grass_15.png'; 

  return (
    <div className="App">
      <ZoomableContent> 
      <HexBoard />
      </ZoomableContent>
    </div>
  );
};

export default App;