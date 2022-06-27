import React, { Component } from "react";
import { useState } from "react";
import { USERS } from "../utils/index.js";

const ElementList = (props) => {
  return (
    <li>
      <picture>
        <img src={props.el.avatar} alt="test" />
      </picture>
      <strong>Eliminar X</strong>

      <p>
        {props.el.firstName} {props.el.lastName}
      </p>
      <p>Edad: {props.el.age}</p>
    </li>
  );
};

const SecondChallenge = () => {
  return (
    <div>
      <h2>USERS</h2>
      <ul>
        {USERS.map((el) => (
          <ElementList key={el.id} el={el} />
        ))}
      </ul>
    </div>
  );
};

export default SecondChallenge;
