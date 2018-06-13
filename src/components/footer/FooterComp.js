import React,{Component} from 'react';
import {Footer} from 'react-materialize'

class FooterComp extends Component {
  render() {
    return (
      <Footer copyrights="2018 Copyright Jonathan Ramirez"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">About Me</a>
        }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        }
        className='cyan darken-2'
        >
        <h5 className="white-text">RJD Glerias</h5>
        <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
        </p>
      </Footer>
    );
  }
}

export default FooterComp;
