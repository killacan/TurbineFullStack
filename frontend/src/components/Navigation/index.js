import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormPage from './LoginFormPage';
import './Navigation.scss';
import turbinelogo from '../../assets/turbinelogo.png'

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
        <NavLink to='/login' ><span id='login-link'>Login</span></NavLink>
        {/* <LoginFormPage /> */}
        <NavLink to="/signup"><span>Sign Up</span></NavLink>
      </>
    );
  }

  // tuna

  return (
    <div className='navigation-holder'>
      <NavLink id='main-title' to={'/'}><img src={turbinelogo} className="turbinelogo" /><h1>Turbine</h1></NavLink>
      <div id='nav-options-holder'>
        <ul>
          <li>
            <NavLink to={'/'} >Store</NavLink>
          </li>
          {sessionUser && <li>
            <NavLink to={`/users/${sessionUser.id}`}>{sessionUser.username}</NavLink>
          </li>}
          {/* <li>
            <NavLink to={'/'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>Support</NavLink>
          </li> */}
        </ul>
      </div>
      <div id='sign-in-holder'>
        {sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
