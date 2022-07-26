import logo from "./logo.svg";
import "./App.css";

import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link href="/route">
          <button className="App-link">Route Test</button>
        </Link>
        <br></br>
        <Route path="/route">It worked!</Route>
      </header>
    </div>
  );
}

export default App;
