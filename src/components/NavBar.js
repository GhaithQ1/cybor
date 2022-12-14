import React from 'react'
import  logo  from "../images/logo.png";
import profileheader from "../images/profileheader.jpg";
import { Navbar } from "../css/Navbar.css";
import {NavLink} from "react-router-dom"
const NavBar = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="container">
          <div className="logo_sreach">
            <img src={logo} alt="Logo" />
            <div className="search">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/browse">
              <li>Browse</li>
            </NavLink>
            <NavLink to="/detils">
              <li>Detils</li>
            </NavLink>
            <NavLink to="/streame">
              <li>Streams</li>
            </NavLink>
            <NavLink to="/profile">
              <li className="profile">
                Porfile
                <img src={profileheader} alt="profile" />
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar