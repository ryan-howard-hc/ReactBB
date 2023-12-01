// ZoomInOut.js
import React, { useState } from 'react';

const ZoomableContent = ({ children }) => {
  const minZoomLevel = 0.5; //minimum zoom level
  const [zoomLevel, setZoomLevel] = useState(1); // initial zoom level

  const zoomFactor = 0.005; // control the zoom rate

  const handleWheel = (event) => {
    event.preventDefault(); // prevents default scrolling behavior

    // adjusts zoom level based on the scroll direction (up/down)
    setZoomLevel((prevZoomLevel) => {
      const newZoomLevel = prevZoomLevel + event.deltaY * zoomFactor;
      return Math.max(minZoomLevel, newZoomLevel); // Restrict zoom level to the minimum value
    });
  };

  return (
    <div
      id="zoomableContent"
      style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left', overflow: 'hidden' }}
      onWheel={handleWheel}
    >
      {children}
    </div>
  );
};

export default ZoomableContent;
