import React, { useReducer } from 'react';
import { reducer, initialState } from '../../reducer'; 
import CounterDisplay from '../counterDisplay/counterDisplay';
import CounterButton from '../counterButton/counterButton';

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CounterDisplay count={state.count} />
      <CounterButton
        onClick={() => dispatch({ type: 'increment' })}
        label="Increment"
      />
      <CounterButton
        onClick={() => dispatch({ type: 'decrement' })}
        label="Decrement"
      />
      <CounterButton onClick={() => dispatch({ type: 'reset' })} label="Reset" />
    </div>
  );
};

export default Counter;
