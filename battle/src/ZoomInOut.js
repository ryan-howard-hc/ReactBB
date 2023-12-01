// ZoomInOut.js
import React, { useState, useRef } from 'react';

const ZoomableContent = ({ children }) => {
  const minZoomLevel = 0.5; // minimum zoom level
  const [zoomLevel, setZoomLevel] = useState(1); // initial zoom level
  const [isDragging, setIsDragging] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const contentRef = useRef(null);

  const zoomFactor = 0.005; // control the zoom rate
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const maxZoomLevel = Math.max(screenWidth, screenHeight) / screenWidth;

  const handleWheel = (event) => {
    event.preventDefault(); // prevents default scrolling behavior
  
    setZoomLevel((prevZoomLevel) => {
      const newZoomLevel = prevZoomLevel - event.deltaY * zoomFactor;
  
      // limits the zoom-out level to the default view (1x)
      return Math.max(1, newZoomLevel);
    });
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setPrevX(event.clientX);
    setPrevY(event.clientY);
  };

  const handleMouseMove = (event) => {
    if (isDragging && contentRef.current !== null) {
      const deltaX = event.clientX - prevX;
      const deltaY = event.clientY - prevY;

      contentRef.current.scrollLeft -= deltaX / zoomLevel;
      contentRef.current.scrollTop -= deltaY / zoomLevel;

      setPrevX(event.clientX);
      setPrevY(event.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setPrevX(0);
    setPrevY(0);
  };

  return (
    <div
      id="zoomableContent"
      style={{
        transform: `scale(${zoomLevel})`,
        transformOrigin: 'top left',
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={contentRef}
    >
      {children}
    </div>
  );
};

export default ZoomableContent;