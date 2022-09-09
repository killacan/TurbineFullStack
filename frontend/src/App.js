import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import NavBottomBar from "./components/NavBottomBar";
import GameShowPage from "./components/GameShowPage";
import UserShowPage from "./components/UserShowPage";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path={`/games/:gameId`}>
            <GameShowPage />
          </Route>
          <Route path={`/users/:userId`}>
            <UserShowPage />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      <NavBottomBar />
    </>
  );
}

export default App;