import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeContext } from "./ThemeContext";

import WebSocketComponent from "./WebSocket";
import { Counter } from "./Counter";

function App() {
  const { toggle, handleToggle } = useContext(ThemeContext);

  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className={`${toggle ? "dark" : ""}`}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleToggle}>Toggle Mode</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <WebSocketComponent />
      {/* <Counter /> */}
    </>
  );
}

export default App;
