import { Button } from "@monorepo/designsystem";
import { logger } from "@monorepo/corelib";
import { MouseEvent } from "react";

import logo from "./logo.svg";

import "./App.css";

const handleClick = (evt: MouseEvent<HTMLButtonElement>) =>
  logger({ evt: evt.currentTarget.nodeName });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button label="my world is true" primary onClick={handleClick} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
