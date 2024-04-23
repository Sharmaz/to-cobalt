import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const usernameRef = useRef();
  function handleInput(event) {
    const regEx = /([A-Z]|[a-z]|\s){1}/;

    if (event.key.match(regEx) && event.key.length < 2) {
      setUsername([...username, event.key]);
    }
    if (event.key === 'Backspace') {
      let lastUsername = [];
      lastUsername.push(username);
      lastUsername = lastUsername.flat();
      lastUsername.pop();
      setUsername(lastUsername);
    }
  }
  return (
    <>
      <h1>User Login</h1>
      <div className="form">
        <div
          className="input input-text"
          ref={usernameRef}
          onClick={() => usernameRef.current.focus()}
          onKeyDown={(event) => handleInput(event)}
          tabIndex="0"
        >
          {username}
        </div>
        <div className="input input-password"></div>
        <button>Sign In</button>
      </div>
      <form action="">
        <input type="text" name="" id="" placeholder='Type Username Here'/>
        <input type="password" name="" id="" placeholder='Type Password Here'/>
      </form>
    </>
  )
}

export default App
