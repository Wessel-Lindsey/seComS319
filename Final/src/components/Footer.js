/*eslint-disable*/
import React from "react";
// import NavLink from "reactstrap";
// import NavItem from "reactstrap";
// reactstrap components
import { 
  Container,  
  // NavItem,
  // NavLink,
  // Nav,
 } from "reactstrap";
import { render } from "react-dom";
// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>

          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Invision
            </a>
            . Coded by{" "}
            <a
              href="https://github.com/Wessel-Lindsey/seComS319"
              target="_blank"
            >
              Linsey Wessel and Sam Lane
            </a>
            .

            <a
              href="./Admin"
              // target="_blank"
              className="admin"
            >
              Admin
            </a>
            {/* <Nav>
              <NavLink>
                <NavItem to="/admin"
                  className={isActive =>
                    "nav-link" + (!isActive ? " unselected" : "")
                  }
                  >
                  Test
                </NavItem>
              </NavLink>
            </Nav> */}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
