import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Nav.Link as={Link} to={"/"} className="navbar-brand">
          My PortFolio
        </Nav.Link>

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
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to={"/about"}>
                about
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to={"/mywork"}>
                My Work
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to={"/contact"}>
                Contact
              </Nav.Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
