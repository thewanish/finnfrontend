import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarInfo } from "./NavbarInfo";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import "./Navbar.css";

function Navbar({ user, handleLogout }) {
  const [sidebaren, settSidebar] = useState(false);

  const viseSidebar = () => settSidebar(!sidebaren);

  const lenkeStil = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={viseSidebar} />
            </Link>
            <NavLink className="nav-link" to="/" style={lenkeStil}>
              <AiFillHome /> Hjem
            </NavLink>
            <NavLink className="nav-link" to="/employer/create" style={lenkeStil}>
              <FaCirclePlus /> Ny annonse
            </NavLink>
            <NavLink className="nav-link" to="/employee/feed" style={lenkeStil}>
              <FaBriefcase /> Søk jobber
            </NavLink>

            {/* Show user profile if logged in */}
            {user ? (
              <div className="user-info">
                <img src={user.picture} alt="Profile" className="profile-pic" />
                <span className="user-name">{user.name}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logg ut
                </button>
              </div>
            ) : (
              <NavLink className="nav-link" to="/login" style={lenkeStil}>
                Login
              </NavLink>
            )}
          </div>
        </IconContext.Provider>

        <nav className={sidebaren ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={viseSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavbarInfo.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
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
