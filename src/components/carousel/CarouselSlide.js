import React,{Component} from 'react';
import {Carousel} from 'react-materialize'

class CarouselSlide extends Component {
  render() {
    return (
      <Carousel
        fixedItem={<button className='btn'>MORE</button>}
        options={{ fullWidth: true, duration: 200, indicators: true }}
        images={[
          'http://placehold.it/800x400/',
          'http://placehold.it/800x400/',
          'http://placehold.it/800x400/',
          'http://placehold.it/800x400/',
          'http://placehold.it/800x400/'
        ]}
        />
    );
  }
}

export default CarouselSlide;
