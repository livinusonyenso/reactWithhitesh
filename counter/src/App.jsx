import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  // setCounter((prevCounter) => prevCounter + 1 )
  const [counter, setCounter] = useState(15);
  const calculator = new Calculate(counter);

  const addValue = () => {
    setCounter(calculator.cal("add"));
  };

  const removeValue = () => {
    setCounter(calculator.cal("minus"));
  };

  const reset = () => {
    setCounter(calculator.cal());
  };

  return (
    <>
      <h1>React Counter with useSate {counter}</h1>
      <h2 >counter value {counter}</h2>
      <button onClick={addValue}>AddValue</button>
      <button onClick={removeValue}>RemoveValue</button>
      <button onClick={reset}>Reset</button>


    </>
  );
}

export default App;

class Calculate {
  constructor(value) {
    this.value = value;
  }

  cal(type) {
    switch (type) {
      case "add":
        return ++this.value;
      case "minus":
        return --this.value;
      default:
        return 0;
    }
  }
}
