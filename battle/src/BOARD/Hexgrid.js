import React from 'react';
import Hexagon from './Hex';

const HexGrid = ({ imageUrl }) => {
  const images = Array.from({ length: 25 }, (_, i) => imageUrl); // Assuming 25 hexagons

  return (
    <ul id="hexGrid">
      {/* {images.map((imgUrl, index) => (
        <Hexagon key={index} imgUrl={imgUrl} />
      ))} */}
    </ul>
  );
};

export default HexGrid;