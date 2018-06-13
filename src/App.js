import React, { Component } from 'react';
import {Row, Col} from 'react-materialize'

import MainNavbar from './components/navbar/Navbar';
import CarouselSlide from './components/carousel/CarouselSlide';
import CardsComp from './components/card/CardsComp';
import FooterComp from './components/footer/FooterComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavbar/>
        <CarouselSlide/>
        <div className="container">
          <Row>
            <Col s={12} m={4}>
              <CardsComp/>
            </Col>
            <Col s={12} m={4}>
              <CardsComp/>
            </Col>
            <Col s={12} m={4}>
              <CardsComp/>
            </Col>
          </Row>
        </div>
        <FooterComp/>
      </div>
    );
  }
}

export default App;
