import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [button, setButton] = useState(false);

  /**Using setTimeout */
  // useEffect(() => {
  //   let timer;
  //   if (button) {
  //     timer = setTimeout(() => {
  //       setCount(count + 1);
  //     }, 1000);
  //   } else {
  //     clearTimeout(timer);
  //   }
  // }, [button, count]);

  /**Using setInterval */
  useEffect(() => {
    let timer: any;
    if (button) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [button]);

  const start = () => {
    console.log("start");
    setButton(true);
  };

  const stop = () => {
    console.log("stop");
    setButton(false);
  };

  const reset = () => {
    console.log("reset");
    setCount(0);
    setButton(false);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
