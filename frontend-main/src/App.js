import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import Account from "./components/Account";

function App() {
 

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className="overlay">
      <NoteState>
        {/* ^ all the variables, functions and states of 'NoteState' will be accessable to below components and their components */}
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home  showAlert={showAlert} />
              </Route>
              <Route exact path="/about">
                <About  />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert} />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert} />
              </Route>
            </Switch>
          </div>
          {/* below line is used to make whole page #f9f9f9 */}
          <div
            style={{ height: "600px", width: "200px", color: "#f9f9f9" }}
            className="my-100"
          >
            to make full page coloured
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
