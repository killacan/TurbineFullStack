import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [formPage, setFormPage] = useState(1);


  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, confirmEmail, username, password, confirmPassword);
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    (formPage === 1) ? (
    <>
      <div id="sign-up-page">
        
        <ul>
          {errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
        <h1>CREATE YOUR ACCOUNT</h1>
        <form onSubmit={handleSubmit} id="create-form">
          
          <label>
            Email Address
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Confirm your Address
            <input
              type="text"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
            />
          </label>
          
          <button onClick={(e) => setFormPage(2)}>Continue</button>
        </form>
      </div>
    </>
    ) : (
      <>
        <div id="sign-up-page">
        <h1>CREATE YOUR ACCOUNT</h1>
          <form id="create-form">
        <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
          </label>
          <label>
            Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
          </label>
        <button onClick={handleSubmit}>Continue</button>
        </form>
        </div>
      </>
    )
  );
}

export default SignupFormPage;

