import React, { Component, PropTypes } from "react";
import GoogleMapReact from "google-map-react";

import Pin from "./Pin";

class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 19.428911,
      lng: -99.139132
    },
    zoom: 19
  };
  render() {
    const userPin = this.props.center ? (
      <Pin
        lat={this.props.center.lat}
        lng={this.props.center.lng}
        userLocation
      />
    ) : (
      ""
    );
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAkTQn6-WrjzYHHceblpMksMWfiloe-j4E" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {userPin}
      </GoogleMapReact>
    );
  }
}

Gmap.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  zoom: PropTypes.number
};

export default Gmap;
