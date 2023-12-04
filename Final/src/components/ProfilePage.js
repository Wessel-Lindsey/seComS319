import React from "react";

// reactstrap components
import {
  Button,
  Container,
  UncontrolledTooltip
} from "reactstrap";

import "assets/css/profile.css";

// core components
import ExamplesNavbar from "Navbar.js";
import ProfilePageHeader from "Header.js";
import DefaultFooter from "Footer.js";
import Carousel from "Carousel.js";

function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Contact Me
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fa fa-linkedin-square fa-2x"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on LinkedIn
              </UncontrolledTooltip>
            </div>
            <Carousel />
            <div class ="container_sidebyside justify-content-center">
                <img alt="headshot" src={require("assets/img/Headshot2.jpg")} class="headshot"></img>
              <div>
                <h3 className="title">About me</h3>
                <h5 className="description">
                A bachelor's in math education, a master's in eductional psychology, 
                over a decade of experience as an award winning secondary and post-secondary educator, and now...a voice actor?! 
                Well, I also have two decades of experience as an actor and acting coach so there's that.
                Being a full-time voice actor had been a long-time dream of mine and now I am loving every minute of it.
                So, take a listen to my demos and contact me today to give your project a voice!
                </h5>
              </div>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;

