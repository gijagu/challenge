import React, { Component } from "react";
import { getGifts } from "../utils/index.js";

function ElementList(props) {
  return (
    <li>
      <p>
        {props.name} : {props.el}
      </p>
    </li>
  );
}

export default class GetGifts extends Component {
  render() {
    const gifts = getGifts();
    return (
      <div>
        <h2>Gifts</h2>
        <ul>
          {Object.keys(gifts).map((key) => (
            <ElementList key={key} el={gifts[key]} name={key} />
          ))}
        </ul>
      </div>
    );
  }
}
