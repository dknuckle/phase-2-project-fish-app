import React, { useState } from 'react';

const TankCalculator = () => {
  const [shape, setShape] = useState('rectangular');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [gallons, setGallons] = useState(0);

  const handleShapeChange = (event) => {
    setShape(event.target.value);
  };

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

    // Perform the calculation based on the selected tank shape
    let calculatedGallons = 0;

    if (shape === 'rectangular') {
      calculatedGallons = tankLength * tankWidth * tankHeight / 231;
    } else if (shape === 'cylindrical') {
      calculatedGallons = Math.PI * (tankWidth / 2) * (tankWidth / 2) * tankHeight / 231;
    } else if (shape === 'conical') {
      calculatedGallons = (1/3) * Math.PI * (tankWidth / 2) * (tankWidth / 2) * tankHeight / 231;
    }

    // Set the calculated value to the gallons state
    setGallons(calculatedGallons);
  };

  return (
    <div>
      <h2>Tank Volume Calculator</h2>
      <div>
        <label htmlFor="shape">Tank Shape:</label>
        <select id="shape" value={shape} onChange={handleShapeChange}>
          <option value="rectangular">Rectangular</option>
          <option value="cylindrical">Cylindrical</option>
          <option value="conical">Conical</option>
        </select>
      </div>
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
