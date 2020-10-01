import React, { Component } from "react";

import DateRequest from "../DateRequest/DateRequest";
import { Button } from "../Utils/Utils.styled";

export default class DisplayDate extends Component {
  constructor(props) {
    super(props);
    this.state = { setDate: false };
  }

  displayMessage(price) {
    if (price === "$$$$") {
      return (
        <div>
          <h2>Baby, I'm worth it</h2>
          <iframe
            src="https://giphy.com/embed/d47IFWkfzgr4DASQ"
            title="worth it giphy"
            alt="worth it giphy"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/fifthharmony-fifth-harmony-d47IFWkfzgr4DASQ">
              via GIPHY
            </a>
          </p>
        </div>
      );
    }
  }

  displayRating(rating) {
    if (rating > 4.4) {
      return (
        <div>
          <h3>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
              {this.props.restaurant}
            </a>{" "}
            is rated {rating} out of 5. You have good taste!
          </h3>
        </div>
      );
    } else {
      return (
        <h3>
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            {this.props.restaurant}
          </a>
        </h3>
      );
    }
  }

  displayType(type) {
    if (type === "walk") {
      return "a walk";
    } else if (type === "comedy club") {
      return "a laugh";
    } else if (type === "coffee tea outdoor seating") {
      return "coffee or tea";
    } else {
      return type.split(" ")[0];
    }
  }

  itsADate = () => {
    this.setState({ setDate: true });
  };

  render() {
    let description = this.displayMessage(this.props.price);
    let score = this.displayRating(this.props.rating);
    let type = this.displayType(this.props.type);

    return (
      <div>
        <h1>rouLet's go here for {type}!</h1>

        {description}
        {score}
        <p>{this.props.address}</p>

        <Button onClick={this.props.replay}>Spin Again</Button>

        <Button onClick={this.itsADate}>Ask Me Out</Button>

        <DateRequest />
      </div>
    );
  }
}
