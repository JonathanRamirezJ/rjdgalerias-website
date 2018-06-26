import React, { Component, PropTypes } from "react";

class MarkerSVG extends Component {
  static defaultProps = {
    color: "red"
  };
  render() {
    const { color } = this.props;
    const useTag = '<use xlink:href="./app/assets/img/pin.svg#gmap-marker"/>';
    const svgStyles = {
      wrap: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        position: "relative"
      },
      svg: {
        fill: `${color}`,
        width: "100%",
        height: "100%"
      }
    };

    return (
      <div style={svgStyles.wrap}>
        <svg
          style={svgStyles.svg}
          dangerouslySetInnerHTML={{ __html: useTag }}
        />
      </div>
    );
  }
}

MarkerSVG.propTypes = {
  color: PropTypes.string
};

export default MarkerSVG;
