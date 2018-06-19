import React,{Component} from 'react';
import {Card, CardTitle} from 'react-materialize'

class CardsComp extends Component {
  render() {
    return (
      <Card
        header={<CardTitle reveal image={"http://placehold.it/800x400/"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#link">This is a link</a></p>
      </Card>
    );
  }
}

export default CardsComp;
