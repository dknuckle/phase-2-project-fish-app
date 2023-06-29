import React, { useState } from 'react';

const TankCalculator = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [gallons, setGallons] = useState(0);

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateGallons = () => {
    // Convert the dimensions to numbers
    const tankLength = Number(length);
    const tankWidth = Number(width);
    const tankHeight = Number(height);
  
    // Perform the calculation using the rectangular tank formula
    const calculatedGallons = tankLength * tankWidth * tankHeight / 231; // Divide by 231 to convert cubic inches to gallons
  
    // Set the calculated value to the gallons state
    setGallons(calculatedGallons);
  };
  

  return (
    <div>
      <h2>Tank Volume Calculator</h2>
      <div>
        <label htmlFor="length">Length (inches):</label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={handleLengthChange}
        />
      </div>
      <div>
        <label htmlFor="width">Width (inches):</label>
        <input
          type="number"
          id="width"
          value={width}
          onChange={handleWidthChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height (inches):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <button onClick={calculateGallons}>Calculate</button>
      {gallons > 0 && (
        <p>
          Tank volume: {gallons} gallons
        </p>
      )}
    </div>
  );
};

export default TankCalculator;
