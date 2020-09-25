import React, { Component } from "react";
import "./Header.css";
import { Circle } from "./Header.styled";

export default class Header extends Component {
  render() {
    let textPath = `<textPath xlink:href="#curve">rouLet's Go Out</textPath>`;
    return (
      <>
        <svg viewBox="0 0 400 400">
          <path
            id="curve"
            stroke="white"
            strokeWidth="30"
            d="M 400, 40
            m -100, 0
            a 50,50 0 1,0 100,0
            a 50,50 0 1,0 -100,0
            "
            fill="#EA4B8B"
          />

          <text
            className="text-path"
            dangerouslySetInnerHTML={{ __html: textPath }}
          ></text>
        </svg>
      </>
    );
  }
}
