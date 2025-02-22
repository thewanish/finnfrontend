import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { NavbarInfo } from "./NavbarInfo";
import { IconContext } from "react-icons";
import { GoogleLogin } from '@react-oauth/google'; // Google login import
import "./Navbar.css";

function Navbar({ user, handleLogout, handleLogin }) {
  const [sidebaren, settSidebar] = useState(false);

  // Veksle synligheten til sidebar (side-meny)
  const viseSidebar = () => settSidebar(!sidebaren);

  // Lukk sidebar etter at en lenke er klikket
  const closeSidebar = () => settSidebar(false);

  const lenkeStil = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={viseSidebar} />
          </Link>

          {/* Navbar lenker */}
          <NavLink className="nav-link" to="/" style={lenkeStil} onClick={closeSidebar}>
            <AiFillHome /> Hjem
          </NavLink>
          <NavLink className="nav-link" to="/employer/create" style={lenkeStil} onClick={closeSidebar}>
            <FaCirclePlus /> Ny annonse
          </NavLink>
          <NavLink className="nav-link" to="/employee/feed" style={lenkeStil} onClick={closeSidebar}>
            <FaBriefcase /> Søk jobber
          </NavLink>

          {/* Google Loginknapp eller brukerinfo */}
          <div className="google-login">
            {!user ? (
              <GoogleLogin
                onSuccess={(response) => {
                  const userData = response?.credential;
                  handleLogin(userData); // Håndter påloging med brukerdata
                }}
                onError={() => console.log("Innlogging mislyktes")}
              />
            ) : (
              <div className="user-info">
                <span className="user-name">{user.name}</span> {/* Vis brukernavn */}
                <button className="logout-btn" onClick={handleLogout}>
                  Logg ut
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar navigasjon (sidemeny) */}
        <nav className={sidebaren ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={closeSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* Dynamisk genererinng av meny-elementer fra NavbarInfo */}
            {NavbarInfo.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={closeSidebar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
