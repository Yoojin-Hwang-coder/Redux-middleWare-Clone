import React from 'react';

function Counter(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={props.onIncrease}>+1</button>
      <button onClick={props.onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
