import React from "react";
import { Link } from "react-router-dom";
import {
  HowItWorks,
  ListItem,
  Instructions,
} from "../LandingPage/LandingPage.styled";
import { Button } from "../Utils/Utils.styled";

export default function LandingPage() {
  return (
    <>
      <Instructions>
        <HowItWorks>How It Works</HowItWorks>
        <ol>
          <ListItem>Pick date/time</ListItem>
          <ListItem>Ask me out</ListItem>
          <ListItem>Play rouLet's Go Out!</ListItem>
        </ol>
        <Link to="/play">
          <Button>Get Started</Button>
        </Link>
      </Instructions>
    </>
  );
}
