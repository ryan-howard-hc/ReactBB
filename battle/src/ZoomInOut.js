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

  const handleWheel = (event) => {
    event.preventDefault(); // prevents default scrolling behavior

    setZoomLevel((prevZoomLevel) => {
      const newZoomLevel = prevZoomLevel - event.deltaY * zoomFactor;
      return Math.max(minZoomLevel, newZoomLevel); // Restrict zoom level to the minimum value
    });
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setPrevX(event.clientX);
    setPrevY(event.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - prevX;
    const deltaY = event.clientY - prevY;

    contentRef.current.scrollLeft -= deltaX;
    contentRef.current.scrollTop -= deltaY;

    setPrevX(event.clientX);
    setPrevY(event.clientY);
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
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={contentRef}
    >
      {children}
    </div>
  );
};

export default ZoomableContent;
