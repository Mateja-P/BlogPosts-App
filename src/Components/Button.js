import React from 'react';
import '../Styles/Button.css';

function Button({ text, padding = 'auto', purpose, onClick = () => {} }) {
  const style = {
    padding: padding,
  };

  return (
    <div
      className='button-div__wrapper'
      style={style}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </div>
  );
}

export default Button;
