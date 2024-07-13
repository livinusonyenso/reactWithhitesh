import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // callbacks in setCounter
  // setCounter((prevCounter) => prevCounter + 1 )
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React Counter with useSate {counter}</h1>
      <h2>counter value {counter}</h2>
      <button onClick={addValue}>AddValue</button>
      <button onClick={removeValue}>RemoveValue</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
