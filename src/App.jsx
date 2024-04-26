import { useState } from 'react';
import TextInput from './components/TextInput';
import PasswordInput from './components/PasswordInput';

import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState('');

  function handleTextInput(event) {
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

  function handlePasswordInput(event) {
    if (event.key.length < 2) {
      setPassword([...password, event.key]);
    }
    if (event.key === 'Backspace') {
      let lastPassword = [];
      lastPassword.push(password);
      lastPassword = lastPassword.flat();
      lastPassword.pop();
      setPassword(lastPassword);
    }
  }

  function hidePassword() {
    setHiddenPassword('*'.repeat(password.length));
  }

  function handleHiddenPasswordInput(event) {
    if (event.key.length < 2) {
      setHiddenPassword('*'.repeat(password.length - 1) + event.key);
      setTimeout(() => {setHiddenPassword('*'.repeat(password.length))}, 150);
    }
    if (event.key === 'Backspace') {
      setHiddenPassword('*'.repeat(password.length));
    }
  }

  function sendPayload() {
    const loginData = {
      username: username.join(''),
      password: password.join('')
    }
    return loginData;
  }

  return (
    <div className="flex flex-col items-center w-full justify-center h-[100vh]">
      <h1 className="text-2xl py-4 text-[#F8F8F2]" >User Login</h1>
      <div className="">
        <TextInput
          username={username}
          handleTextInput={handleTextInput}
        />
        <PasswordInput
          password={password}
          hiddenPassword={hiddenPassword}
          handlePasswordInput={handlePasswordInput}
          handleHiddenPasswordInput={handleHiddenPasswordInput}
          hidePassword={hidePassword}
        />
        <button
          className="border-[1px] border-[#F8F8F2] rounded-lg py-1 px-4 text-[#F8F8F2]"
          onClick={() => sendPayload()}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default App
