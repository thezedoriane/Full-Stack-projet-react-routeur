import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      role="navigation"
      aria-label="main navigation"
    >
      <div>
        <div>
          <a
            role="button"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div>
          <img src="../Polybook.png" width="400" height="379"/>
          <div class='App-header'>
            <NavLink id='lien'
              activeClassName="is-active" 
              to="/">
              Home
            </NavLink>
            <p>" "</p>
            <NavLink id='lien'
              activeClassName="is-active"
              to="/pricing"
            >
              Products pricing
            </NavLink>
            <p>" "</p>
            <NavLink id='lien'
              activeClassName="is-active"
              to="/team"
            >
              Team
            </NavLink>
            <p>" "</p>
            <NavLink id='lien'
              activeClassName="is-active"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;