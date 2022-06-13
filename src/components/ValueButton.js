import React from "react";
import "./valueButton.css";

export default function ValueButton({ name, value, fun, id }) {
  return (
    <button id={id} name={name} onClick={fun}>
      {value}
    </button>
  );
}
