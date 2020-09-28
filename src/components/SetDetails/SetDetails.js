import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Utils/Utils.styled";

export default function SetDetails() {
  return (
    <Link to="/details">
      <Button>Set the Details</Button>
    </Link>
  );
}
