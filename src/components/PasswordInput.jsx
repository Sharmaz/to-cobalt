import { useState, useRef } from 'react'
import IconHide from '../assets/hide.svg';
import IconShow from '../assets/show.svg';

const PasswordInput = () => {
  const [isShow, setIsShow] = useState(true);
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const passwordRef = useRef();

  function handleInput(event) {

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

  function handlePasswordInput(event) {
    if (event.key.length < 2) {
      setHiddenPassword('*'.repeat(password.length - 1) + event.key);
      setTimeout(() => {setHiddenPassword('*'.repeat(password.length))}, 150);
    }
    if (event.key === 'Backspace') {
      setHiddenPassword('*'.repeat(password.length));
    }
  }

  return (
    <div className="password-container my-2 flex">
      <div
        className={`${isShow? 'flex': 'hidden'} input input-password w-[160px] items-center p-2`}
        ref={passwordRef}
        onClick={() => passwordRef.current.focus()}
        onKeyDown={(event) => handleInput(event)}
        onKeyUp={() => setHiddenPassword('*'.repeat(password.length))}
        tabIndex="0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {password}
        <div className={`cursor animate-cursor-pulse ${isFocused ? 'block' : 'hidden'}`}></div>
      </div>
      <div
        className={`${isShow? 'hidden': 'flex'} input input-password w-[160px] items-center p-2`}
        ref={passwordRef}
        onClick={() => passwordRef.current.focus()}
        onKeyDown={(event) => handleInput(event)}
        onKeyUp={(event) => handlePasswordInput(event)}
        tabIndex="0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {hiddenPassword}
        <div className={`cursor animate-cursor-pulse ${isFocused ? 'block' : 'hidden'}`}></div>
      </div>
      <button
        className="ml-4"
        onClick={() => setIsShow(!isShow)}
      >
        <img src={isShow ? IconHide : IconShow} width={24} height={24} />
      </button>
    </div>
  )
}

export default PasswordInput;
