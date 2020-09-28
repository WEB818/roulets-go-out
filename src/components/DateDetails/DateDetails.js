import React from "react";
import { DateForm } from "./DateDetails.styled";
import { Input, Button } from "../Utils/Utils.styled";

export default function DateDetails() {
  let test = (ev) => {
    ev.preventDefault();
    let date = ev.target.date;
    let time = ev.target.time;
    let distance = ev.target.distance;
    let mincost = ev.target.mincost;
    let maxcost = ev.target.maxcost;
  };
  return (
    <DateForm onSubmit={test}>
      <legend>Details</legend>
      <label htmlFor="date">Date</label>
      <Input id="date" type="date" name="date" />
      <label htmlFor="time">Time</label>
      <Input id="time" type="time" name="time" />
      <label htmlFor="distance">Distance</label>
      <Input
        id="distance"
        type="number"
        name="distance"
        min="0"
        placeholder="from you (in miles)"
      />
      <label htmlFor="mincost">Minimum Cost</label>
      <Input
        id="mincost"
        type="number"
        min="0"
        name="mincost"
        step="5"
        placeholder="in USD"
        required
      />
      <label htmlFor="maxcost">Maximum Cost</label>
      <Input
        id="maxcost"
        type="number"
        min="0"
        name="maxcost"
        step="5"
        placeholder="in USD"
      />
      <Button>rouLet's Go!</Button>
    </DateForm>
  );
}
