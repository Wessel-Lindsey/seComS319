import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function PageNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {/* <NavItem>
                <NavLink to="/about"
                  className={isActive =>
                    "nav-link" + (!isActive ? " unselected" : "")
                  }
                >
                  About Me
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/voslade/">
                  Contact Me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/voslade/"
                  target="_blank"
                  id="linkedIn-tooltip"
                >
                  <i class="fa fa-linkedin-square fa-3x"></i>
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
                <UncontrolledTooltip target="#linkedIn-tooltip">
                  Follow me on LinkedIn
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default PageNavbar;
