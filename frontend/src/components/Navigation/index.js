import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormPage from './LoginFormPage';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to='/login' >Login</NavLink>
        {/* <LoginFormPage /> */}
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navigation-holder'>
      <NavLink id='main-title' to={'/'}><h1>Turbine</h1></NavLink>
      <div id='nav-options-holder'>
        <ul>
          <li>
            <NavLink to={'/'} >Store</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>Community</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>Support</NavLink>
          </li>
        </ul>
      </div>
      <div id='sign-in-holder'>
        <ul>
          <li>
            {sessionLinks}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
