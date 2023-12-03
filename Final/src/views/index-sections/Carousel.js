import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

import "assets/css/audio.player.css";

// core components

const items = [
  {
    src: require("assets/img/soundClips/Animation_Demo.mp3"),
    altText: "Animation",
    caption: "Animation"
  },
  {
    src: require("assets/img/soundClips/Audiobook_Demo_Adult_Non-Fiction.mp3"),
    altText: "Non-Fiction",
    caption: "Non-Fiction"
  },
  {
    src: require("assets/img/soundClips/Audiobook_Demo_Childrens_Fiction.mp3"),
    altText: "Children's Fiction",
    caption: "Children's Fiction"
  }
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="title">
            <h4>Demos</h4>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel className="card"
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem className="centered"
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                        <div className="carousel-caption d-none d-md-block">
                          <h3>{item.caption}</h3>
                        </div>
                        <audio controls src={item.src} className="player"/>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;


  
