import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      {/* <div className="container"> */}
          
      <div className="container">
        <a className="navbar-brand" href="/">
          My Portfolio
        </a>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link " aria-current="page" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                About me
              </a>
            </li>
{/* 
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer> */}

            <li className="nav-item">
              <a className="nav-link" href="mywork">
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
