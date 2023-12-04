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

const items = [
  {
    src: require("assets/soundClips/Animation_Demo.mp3"),
    altText: "Animation",
    caption: "Animation"
  },
  {
    src: require("assets/soundClips/Audiobook_Demo_Adult_Non-Fiction.mp3"),
    altText: "Non-Fiction",
    caption: "Non-Fiction"
  },
  {
    src: require("assets/soundClips/Audiobook_Demo_Childrens_Fiction.mp3"),
    altText: "Children's Fiction",
    caption: "Children's Fiction"
  },
  {
    src: require("assets/img/soundClips/Commercial_Demo.mp3"),
    altText: "Commercial",
    caption: "Commercial"
  },
  {
    src: require("assets/img/soundClips/eLearning_Training_Demo.mp3"),
    altText: "eLearning",
    caption: "eLearning"
  },
  {
    src: require("assets/img/soundClips/Self_Development_Demo.mp3"),
    altText: "Self-Development",
    caption: "Self-Development"
  },
  {
    src: require("assets/img/soundClips/Telephone_and_IVR_Demo.mp3"),
    altText: "Telephone and IVR",
    caption: "Telephone and IVR"
  },
  {
    src: require("assets/img/soundClips/Video_Game_Demo.mp3"),
    altText: "Video Game",
    caption: "Video Game"
  }
];

function getClips() {
  fetch('http://localhost:8081/get')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          getMethod(data);
      })
};
function getMethod(myclips) {
  var mainContainer = document.getElementById("soundClips");
  for (var i = 0; i < myclips.length; i++) {
      let title = myclips[i].title;
      let text = myclips[i].text;
      let soundSample = myclips[i].soundSample;
      let div = document.createElement("div");
      div.innerHTML = `
        <h3>${title}</h3>
        ${text} <br>
        <img src=${soundSample} width="200"> <br> <br>
        `;
      console.log(div);
      items.add(div);
  }
}

function CarouselSection() {
  getClips();
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
    const nextIndex = activeIndex === 8 - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? 8 - 1 : activeIndex - 1;
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


  
