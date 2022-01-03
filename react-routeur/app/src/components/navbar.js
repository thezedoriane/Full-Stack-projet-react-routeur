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
          <div class='App-header'>
            <NavLink id='lien'
              activeClassName="is-active" 
              to="/">
              Home
            </NavLink>
            <p>" "</p>
            <NavLink id='lien'
              activeClassName="is-active"
              to="/productPricing"
            >
              Product pricing
            </NavLink>
            <p>" "</p>
            <NavLink id='lien'
              activeClassName="is-active"
              to="/contact"
            >
              Contact
            </NavLink>
            <p>" "</p>
            <NavLink id='lien'
              activeClassName="is-active"
              to="/team"
            >
              Team
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;