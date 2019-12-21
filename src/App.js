import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NameForm from "./components/NameForm/NameForm";
import FailedToast from "./components/FailedToast/FailedToast";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Form</Link>
            </li>
            <li>
              <Link to="/failed-toast">Failed Toast</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <NameForm />
            </Route>
            <Route path="/failed-toast">
              <FailedToast />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
