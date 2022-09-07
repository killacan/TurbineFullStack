import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/" >
            <h1>Home</h1>
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
    </>
  );
}

export default App;