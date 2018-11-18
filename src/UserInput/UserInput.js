import React from 'react';

const userInput = props => {
  const inputStyles = {
    border: '1px solid blue',
    padding: '8px',
    borderRadius: '4px',
    textAlign: 'center'
  };
  return (
    <div className="userInput">
      <label>Name Changer</label>
      <br />
      <input
        type="text"
        onChange={props.changed}
        value={props.currentName}
        style={inputStyles}
      />
    </div>
  );
};

export default userInput;
