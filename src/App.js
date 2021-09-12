import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);
  const [test, setTest] = useState(0);

  useEffect(()=>{ //이벤트가 발생하면, 무조건 컴포넌트가 재실행되면서 리랜더링
    console.log('count: ' + count);
  }, [count]) // , [] : 종속성 --> count가 변할때만 찍히게 한다

  useEffect(()=>{
    console.log('first rendering');
  }, []) // [] 쓰면 최초 한번만 랜더링

  const increment = () => {
    setCount(count + 1);
  };

  return (    
    <div className="App">
      <h1>Kossie Coder</h1>
      <button onClick={increment}>Click1</button>
      <button onClick={() => setKossie(kossie + 1)}>Click2</button>
      <button onClick={() => setTest(test + 1)}>Click2</button>

    </div>
  );
}

export default App;
