import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class CarosuelImage extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("videoID").play();
    }, 3000);
  }

  render() {
    return (
      <Carousel controls={false} indicators={false}>
        <Carousel.Item className="text-center">
          <video
            id="videoID"
            preload="auto"
            loop="loop"
            muted="muted"
            width={912}
            poster="./app/assets/wallpaper/fondo05.jpg"
          >
            <source src="./app/assets/video/rjdVideo.mp4" type="video/mp4" />
            Video not Support in your browser.
            <track />
          </video>
          <Carousel.Caption>
            <h3>RJD Galerias</h3>
            <p>Tu espacio musical.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarosuelImage;
