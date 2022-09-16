import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import userIcon from "../../assets/user.png";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="profile-container" >
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      </div>
      <NavLink to={`/users/${sessionUser.id}`} ><img className="profile-button" src={userIcon} /></NavLink>
        
    </>
  );
}

export default ProfileButton;
