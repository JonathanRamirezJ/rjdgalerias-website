import React from "react";
import { Carousel } from "react-bootstrap";

const CarosuelImage = () => (
  <Carousel controls={false}>
    <Carousel.Item>
      <img
        width={1200}
        height={500}
        alt="1200x500"
        src="./app/assets/wallpaper/fondo05.jpg"
      />
      <Carousel.Caption>
        <h3>RJD Galerias</h3>
        <p>Observa a través del sonido.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        width={1200}
        height={500}
        alt="1200x500"
        src="./app/assets/wallpaper/fondo02.jpg"
      />
      <Carousel.Caption>
        <h3>Cerca de ti</h3>
        <p>
          Ven y conoce nuestra gran variedad de productos que tenemos para ti.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        width={1200}
        height={500}
        alt="1200x500"
        src="./app/assets/wallpaper/fondo03.jpg"
      />
      <Carousel.Caption>
        <h3>¿Necesitas algo?</h3>
        <p>Lo que buscas lo encuentras aquí</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarosuelImage;
