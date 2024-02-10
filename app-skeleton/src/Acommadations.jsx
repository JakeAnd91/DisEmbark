import React, { useState } from 'react';

function Acommadations() {
  const [selectedOption, setSelectedOption] = useState(''); // State to manage selected option

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update selected option when dropdown value changes
  };

  return (
    <div>
      <h2>Dropdown Page</h2>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption && (
        <div>
          <p>You have selected: {selectedOption}</p>
        </div>
      )}
    </div>
  );
}

export default Acommadations;