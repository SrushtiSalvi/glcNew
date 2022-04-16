import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown text-green-600'}>
      <p>{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
