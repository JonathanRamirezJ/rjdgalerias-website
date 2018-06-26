import React, { Component, PropTypes } from "react";

class Cards extends Component {
  static defaultProps = {
    image: "https://placehold.it/1200x600",
    title: "title-card",
    url: "#"
  };
  render() {
    return (
      <div className="cards-image">
        <div>
          <a href={this.props.url} target="_blank">
            <img className="image" alt="img" src={this.props.image} />
          </a>
        </div>
        <div>
          <p className="text text-center">{this.props.title}</p>
        </div>
      </div>
    );
  }
}

Cards.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
};

export default Cards;
