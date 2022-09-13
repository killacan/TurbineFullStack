import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import NavBottomBar from "./components/NavBottomBar";
import GameShowPage from "./components/GameShowPage";
import UserShowPage from "./components/UserShowPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navigation />
        <Switch >
          <Route exact path="/" >
            <ScrollToTop />
            <HomePage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path={`/games/:gameId`}>
            <ScrollToTop />
            <GameShowPage />
          </Route>
          <Route path={`/users/:userId`}>
            <ScrollToTop />
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