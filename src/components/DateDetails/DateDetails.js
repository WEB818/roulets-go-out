import React, { Component } from "react";

import DisplayDateDetails from "../DisplayDateDetails/DisplayDateDetails";
import { DateForm } from "./DateDetails.styled";
import { Input, Button } from "../Utils/Utils.styled";

export default class DateDetails extends Component {
  renderForm() {
    return (
      <DateForm onSubmit={(ev) => this.props.getLocation(ev)}>
        <legend>Details</legend>
        <label htmlFor="type">What should we do?</label>
        <select
          id="type"
          name="type"
          onChange={(ev) => this.props.onChange(ev)}
        >
          <option value="fun">I'm up for anything!</option>
          <option value="coffee tea outdoor seating">Coffee or Tea</option>
          <option value="brunch outdoor seating">Brunch</option>
          <option value="lunch outdoor seating">Lunch</option>
          <option value="dinner outdoor seating">Dinner</option>
          <option value="drinks outdoor seating">Drinks</option>
          <option value="dessert outdoor seating">Dessert</option>
          <option value="walk">Go for a walk</option>
          <option value="comedy club">Comedy Show</option>
        </select>
        <label htmlFor="location">Location</label>
        <Input
          id="location"
          type="text"
          name="location"
          placeholder="btw, I live in Berkeley"
          required
        />

        <Button>rouLet's Go!</Button>
      </DateForm>
    );
  }

  renderDetails() {
    return (
      <DisplayDateDetails
        type={this.props.type}
        restaurant={this.props.restaurant}
        address={this.props.address}
        image={this.props.image}
        price={this.props.price}
        rating={this.props.rating}
        link={this.props.link}
        replay={this.props.replay}
      />
    );
  }
  render() {
    const { details } = this.props;
    return (
      <>
        {details ? (
          <div>{this.renderDetails()}</div>
        ) : (
          <div>{this.renderForm()}</div>
        )}
      </>
    );
  }
}
