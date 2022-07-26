import logo from "./logo.svg";
import "./App.css";

import { Link, Route, Router } from "wouter";

const baseUrl = "react-ghpages-test";

function App() {
  return (
    <Router base={`/${baseUrl}`}>
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
    </Router>
  );
}

export default App;
