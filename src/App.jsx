import Button from "./components/Button";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [key, setKey] = useState();

  useEffect(() => {
    const handleKeyPress = (event) => setKey(event.key);
    window.addEventListener("keydown", handleKeyPress);

    return () => removeEventListener("keydown", handleKeyPress);
  }, []);

  const IncreaseCount = () => {
    setCount((prev) => prev + 54);
  };

  return (
    <div>
      <button onClick={IncreaseCount}>Increase</button>

      <p>you Press key :{key}</p>
    </div>
  );
};

export default App;
