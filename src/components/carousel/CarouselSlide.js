import React,{Component} from 'react';
import {Carousel} from 'react-materialize'

class CarouselSlide extends Component {
  render() {
    return (
      <Carousel
        fixedItem={<button className='btn'>MORE</button>}
        options={{ fullWidth: true, duration: 200, indicators: true }}
        images={[
          'https://www.hd-wallpapersdownload.com/download/720-hd-tv-hd-wallpaper-800x400/',
          'https://www.hd-wallpapersdownload.com/download/720-hd-tv-hd-wallpaper-800x400/',
          'https://www.hd-wallpapersdownload.com/download/720-hd-tv-hd-wallpaper-800x400/',
          'https://www.hd-wallpapersdownload.com/download/720-hd-tv-hd-wallpaper-800x400/',
          'https://www.hd-wallpapersdownload.com/download/720-hd-tv-hd-wallpaper-800x400/'
        ]}
        />
    );
  }
}

export default CarouselSlide;
