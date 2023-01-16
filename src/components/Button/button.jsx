import React from 'react';

export default function ButtonSample({ name, handleClick, type }) {
  return (
    <div>
      <button className='buttonBase' onClick={handleClick} type={type}>
        {name}
      </button>
    </div>
  );
}
