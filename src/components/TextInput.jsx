import { useState, useRef } from 'react'


const TextInput = () => {
  const [username, setUsername] = useState('');
  const [isFocused, setIsFocused] = useState(false);
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
    <div className="input-text-container my-2">
      <div
        className="input input-text flex items-center p-2"
        ref={usernameRef}
        onClick={() => usernameRef.current.focus()}
        onKeyDown={(event) => handleInput(event)}
        tabIndex="0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {username}
        <div className={`cursor animate-cursor-pulse ${isFocused ? 'block' : 'hidden'}`}></div>
      </div>
    </div>
  );
}

export default TextInput;
