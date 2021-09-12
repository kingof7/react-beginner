import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //const [text, setText] = useState('Kossie'); //담을값,업데이트함수
  const onSubmit = (event) => {
    alert('로그인에 성공하셨습니다.');
    event.preventDefault(); // refresh 막아줌
    console.log(username, password)
  }

  // const onKeyUp = (event) => {
  //   if (event.keyCode === 13){ //enter key
  //     console.log(event.keyCode);
  //     onSubmit();
  //   }
  // }

  //let text = "Kossie";

  // const updateText = () => {
  //   //text = 'Coder';
  //   setText('Coder');
  //   console.log(text);
  // }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input 
        placeholder="Username" 
        value={username}
        onChange={e => setUsername(e.target.value)} /><br />
        <input 
        placeholder="Password" 
        value={password}
        onChange={e => setPassword(e.target.value)}/><br />
        <button type="submit">Login</button>
      </form>   
    </div>
  );
}

export default App;
