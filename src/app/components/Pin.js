import React, { PropTypes, Component } from "react";
import { Image, Popover, Overlay } from "react-bootstrap";

import MarkerSVG from "Components/MarkerSVG";

const K_WIDTH = 40;
const K_HEIGHT = 40;
const U_WIDTH = 32;
const U_HEIGHT = 30;

const pinStyle = {
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  textAlign: "center",
  padding: 4
};

const userPin = {
  width: U_WIDTH,
  height: U_HEIGHT
};

class Pin extends Component {
  static defaultProps = {
    color: "red",
    logo: "logo",
    userLocation: "true"
  };
  render() {
    const { color, logo, userLocation } = this.props;
    const userPinUrl = "./app/assets/img/pin.svg";

    const tooltip = (
      <Popover id="popover">
        <img src={logo} alt="logo" />
      </Popover>
    );

    const pin = userLocation ? (
      <Image src={userPinUrl} style={userPin} />
    ) : (
      <MarkerSVG color={color} />
    );

    return (
      <div style={pinStyle}>
        <Overlay show={false} placement="top" container={this}>
          {tooltip}
        </Overlay>
        {pin}
      </div>
    );
  }
}

Pin.propTypes = {
  color: PropTypes.string,
  logo: PropTypes.string,
  userLocation: PropTypes.bool
};

export default Pin;
