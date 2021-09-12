import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const clickString = props.click || 'Click'; // props.click이 존재하지않는다면, 'Click'으로 표현
  return (
      <button onClick={increment}>
          {clickString} {count}
      </button>
  );    
};

export default Counter;