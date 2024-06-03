import React, { useState } from 'react';

const CheckboxExample = () => {
  const [checkboxValues, setCheckboxValues] = useState(['none']);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    // Update the checkboxValues array based on the checkbox state
    setCheckboxValues((prevValues) => {
      if (isChecked) {
        // Add the value to the array if checked
        return [...prevValues, value];
      } else {
        // Remove the value from the array if unchecked
        return prevValues.filter((val) => val !== value);
      }
    });
  };

  return (
    <div>
      <h1>Checkbox Example</h1>
      <form>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={checkboxValues.includes('option1')}
            onChange={handleCheckboxChange}
          />
          Option 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={checkboxValues.includes('option2')}
            onChange={handleCheckboxChange}
          />
          Option 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="option3"
            checked={checkboxValues.includes('option3')}
            onChange={handleCheckboxChange}
          />
          Option 3
        </label>
      </form>
      <p>You know: {checkboxValues.join(',')}</p>
    </div>
  );
};

export default CheckboxExample;
