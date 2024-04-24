import TextInput from './components/TextInput';
import PasswordInput from './components/PasswordInput';

import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center w-full justify-center h-[100vh]">
      <h1 className="text-2xl py-4" >User Login</h1>
      <div className="">
        <TextInput />
        <PasswordInput />
        <button className="border-[1px] border-black rounded-lg py-1 px-4">Sign In</button>
      </div>
      <form action="">
        <input type="text" name="" id="" placeholder='Type Username Here'/>
        <input type="password" name="" id="" placeholder='Type Password Here'/>
      </form>
    </div>
  )
}

export default App
