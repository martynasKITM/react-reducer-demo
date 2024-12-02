import React from 'react';

const CounterButton = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default CounterButton;