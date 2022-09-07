import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const demoLogin = (e) => {
    e.preventDefault();
    console.log("demo login");
    return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    <>
      <div id="sign-in-page">
        <h1 id="sign-in-title-text"> SIGN IN</h1>
        <div id="sign-in-box">
          <div id="sign-in-form-container">
            <form onSubmit={handleSubmit} className={'sign-in-form'}>
              <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
              </ul>
              <div className="account-sign-in-input-container">
              <label id="account-name-label">
                SIGN IN WITH ACCOUNT NAME
                <input
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                />
              </label>
              </div>
              <div className="password-sign-in-input-container">
              <label id="password-name-label">
                PASSWORD
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              </div>
              <button type="submit">Sign in</button>
              <button onClick={demoLogin}>Demo Login</button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginFormPage;