import React from "react";
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
          <li class="nav-item">
          <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
          </li>
          <li class="nav-item">
          <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
          </li>
          <li class="nav-item">
            <Nav.Link as={Link} to={"/mywork"}>
                    My Work
            </Nav.Link>
          </li>
          <li class="nav-item">
            <Nav.Link as={Link} to={"/contact"}>
                Contact
            </Nav.Link>
          </li>
        </ul>
        <p class="text-center text-muted" id="footer-para">
          Created By <span id="footer-name">RUSHIKESH AHIRE</span> | © 2022 All
          rights reserved.
        </p>

        <ul class="nav justify-content-center border-bottom pb-2 mb-3">
          <li class="nav-item" className="footer-links">
            <a
              href="https://github.com/Rushiahire"
              class="nav-link px-2 text-muted"
            >
              <i className="fa fa-github" id="footer-github"></i>
            </a>
          </li>

          <li class="nav-item" className="footer-links">
            <a
              href="https://www.linkedin.com/in/rushikesh-ahire-05bb74220/"
              class="nav-link px-2 text-muted"
            >
              <i className="fa fa-linkedin" id="footer-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
