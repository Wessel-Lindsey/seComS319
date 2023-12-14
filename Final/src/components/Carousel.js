import React, { useEffect, useState } from "react";
import axios from 'axios';

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

var numSoundClips = 0;
function CarouselSection() {
  const [carouselData, setCarouselData] = useState([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  useEffect(() =>{ 
    const fetchData = async() => {
      try{
        const response = await axios.get('http://localhost:8081/get');
        setCarouselData(response.data);
        numSoundClips = response.data.length;
      }catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    }
    fetchData();
  }, []);



  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === numSoundClips - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? numSoundClips - 1 : activeIndex - 1;
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
                  items={carouselData}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />

                {carouselData.map((item, index) => {
                  return (
                    <CarouselItem className="centered"
                      onExiting={onExiting}
                      onExited={onExited}
                      key={index}
                    > <div className="centered">
                      <Col className="justify-content-center">
                        <Row className="justify-content-center">
                          <div>
                            <h3>{item.title}</h3>
                          </div>
                        </Row>
                        <Row className="justify-content-center">
                        <div>
                          <audio controls>
                            <source src={item.soundSample} type="audio/mp3"/>
                              Not working
                          </audio>
                        </div>
                        </Row>
                        <Row className="justify-content-center">
                          <div>
                            <br/>
                            <p>{item.text}</p>
                          </div>
                        </Row>
                        </Col>
                      </div>
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


  
