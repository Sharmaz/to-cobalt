import { useState, useRef } from 'react'
import { PropTypes } from 'prop-types';
import IconHide from '../assets/hide.svg';
import IconShow from '../assets/show.svg';

const PasswordInput = ({
  password,
  hiddenPassword,
  handlePasswordInput,
  handleHiddenPasswordInput,
  hidePassword}) => {
  const [isShow, setIsShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const passwordRef = useRef();

  return (
    <div className="password-container my-2 flex">
      <div
        className={`${isShow? 'flex': 'hidden'} input input-password w-[200px] items-center p-2 relative
          ${isFocused || password.length > 0 ? '' : String.raw`after:content-['Type\00a0Password\00a0Here']`}
          after:absolute after:top-2 after:left-2 after:h-[40px] after:w-[200px] after:text-slate-500`}
        ref={passwordRef}
        onClick={() => passwordRef.current.focus()}
        onKeyDown={(event) => handlePasswordInput(event)}
        onKeyUp={() => hidePassword()}
        tabIndex="0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {password}
        <div className={`cursor animate-cursor-pulse ${isFocused ? 'block' : 'hidden'}`}></div>
      </div>
      <div
        className={`${isShow? 'hidden': 'flex'} input input-password w-[200px] items-center p-2 relative
          ${isFocused || password.length > 0 ? '' : String.raw`after:content-['Type\00a0Password\00a0Here']`}
          after:absolute after:top-2 after:left-2 after:h-[40px] after:w-[200px] after:text-slate-500`}
        ref={passwordRef}
        onClick={() => passwordRef.current.focus()}
        onKeyDown={(event) => handlePasswordInput(event)}
        onKeyUp={(event) => handleHiddenPasswordInput(event)}
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
  );
}

PasswordInput.propTypes = {
  password: PropTypes.string,
  hiddenPassword: PropTypes.string,
  handlePasswordInput: PropTypes.function,
  handleHiddenPasswordInput: PropTypes.function,
  hidePassword: PropTypes.function
}

export default PasswordInput;
