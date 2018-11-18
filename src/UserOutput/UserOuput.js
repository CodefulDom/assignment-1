import React from 'react';

const userOutput = props => {
  return (
    <div>
      <p>Username: {props.userName} </p>
      <p>
        This has some text in it that nobody is actually going to read but we
        carry on anyhow.
      </p>
      <p>
        This one is even more worthless. At some level you have to understand
        that this is a an exercise in futility.
      </p>
    </div>
  );
};

export default userOutput;
