import { useState } from "react";

export default function App() {

 
  const [message, setMessage] = useState("Hello, World!");

  function changeMessage(){
    setMessage("Message Changed!");
  }



  return (
  <div>
    <p>{message}</p>
    <p>This is my first React + Electron Project.</p>
    <button onClick={changeMessage}>Click Me</button>
  
  </div>);
}