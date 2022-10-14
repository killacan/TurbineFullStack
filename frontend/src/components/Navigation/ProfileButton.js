import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import userIcon from "../../assets/user.png";
import icon4 from "../../assets/4.jpg"; 
import icon5 from "../../assets/5.jpg";
import icon7 from "../../assets/7.jpg";
import icon19 from "../../assets/19.jpg";
import icon20 from "../../assets/20.jpg"; 
import icon21 from "../../assets/21.jpg"; 
import icon23 from "../../assets/23.jpg";
import icon24 from "../../assets/24.jpg";
import icon27 from "../../assets/27.jpg";
import icon28 from "../../assets/28.jpg";
import icon29 from "../../assets/29.jpg";
import icon30 from "../../assets/30.jpg";
import icon31 from "../../assets/31.jpg";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const [sessionIcon, setSessionIcon] = useState(sessionUser.profileImgUrl)

  useEffect(() => {
    setSessionIcon(sessionUser.profilePicUrl)
    console.log(sessionUser)
  }, [sessionUser])

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  const profileIcon = [
    userIcon,
    icon4,
    icon5,
    icon7,
    icon19,
    icon20,
    icon21, 
    icon23, 
    icon24, 
    icon27,
    icon28,
    icon29,
    icon30,
    icon31
]

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
      <NavLink to={`/users/${sessionUser.id}`} ><img className="profile-button" src={profileIcon[sessionIcon]} /></NavLink>
        
    </>
  );
}

export default ProfileButton;
