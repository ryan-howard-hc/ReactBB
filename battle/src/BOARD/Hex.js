import React from "react";
import HexagonGrid from "./Hexgrid.js";
import times from "lodash/times";
// import HexagonImage from "./HexagonImage.js"; 

const HexBoard = () => {
  const getHexProps = (hexagon) => {
    const imageUrl = "https://opengameart.org/sites/default/files/grass_15.png"; 
    return {
      style: {
        fill: "#007aff",
        stroke: "white",
      },
      onClick: () => alert(`Hexagon n.${hexagon} has been clicked`),
      imageUrl: imageUrl, 
    };
  };

  const renderHexagonContent = (hexagon) => {
    return (
      <text
        x="50%"
        y="50%"
        fontSize={100}
        fontWeight="lighter"
        style={{ fill: "white" }}
        textAnchor="middle"
      >
        {hexagon}
      </text>
    );
  };

  let hexagons = times(198, (id) => id);

  return (
    <HexagonGrid
      gridWidth={1800}
      gridHeight={1000}
      hexagons={hexagons}
      hexProps={getHexProps}
      renderHexagonContent={renderHexagonContent}
    />
  );
};

export default HexBoard;
