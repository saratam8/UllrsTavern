import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./index.css";

function Nav() {

  const logoStyle = {
    whiteSpace:'nowrap',
    display:'inline-flex',
    margin:'auto',
    fontFamily: 'Slab',
    fontSize: '1.5rem',
    fontWeight: '600',
  };
  
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          {/* <li className="mx-1">
            <Link to="/test">
              Test
            </Link>
          </li> */}
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row nav">
          <li>
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          {/* <li className="mx-1">
            <Link to="/test">
              Test
            </Link>
          </li> */}
          {/* <li className="mx-1">
            <Link to="/group">
              Group Page
            </Link>
          </li> */}
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 container">
      <div style={logoStyle}>
        <Link to="/">

        <img src="/ut-logo.png" className="logo col-3" alt="logo" />
        <div className="col-6" style={logoStyle}>Ullr's Tavern</div>
        </Link>
        </div>
        <div className="col-12">
        <nav>
        {showNavigation()}
      </nav>
          </div>
    </header>
  );
}

export default Nav;
