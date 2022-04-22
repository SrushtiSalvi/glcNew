import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown text-green-600'}>
      <p>{value || 0}</p>
    </div>
  );
};

export default DateTimeDisplay;
