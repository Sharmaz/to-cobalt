import { useState, useRef } from 'react'
import { PropTypes } from 'prop-types';


const TextInput = ({username, handleTextInput}) => {
  const [isFocused, setIsFocused] = useState(false);
  const usernameRef = useRef();

  return (
    <div className="input-text-container my-2">
      <div
        className={`input input-text flex items-center p-2 relative
          ${isFocused || username.length > 0 ? '' : String.raw`after:content-['Type\00a0Username\00a0Here']`}
          after:absolute after:top-2 after:left-2 after:h-[40px] after:w-[200px] after:text-slate-500`}
        ref={usernameRef}
        onClick={() => usernameRef.current.focus()}
        onKeyDown={(event) => handleTextInput(event)}
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

TextInput.propTypes = {
  username: PropTypes.string,
  handleTextInput: PropTypes.function
}

export default TextInput;
