import React from "react";
import { useState } from "react";
import DropdownElement from "./DropdownElement";

export default function Dropdown(props) {

  const [display, setDisplay] = useState(false)

  return (
    <div className="dropdown">
      <button onClick={() => setDisplay(!display)}>
        Menu
      </button>
      {!display ?
      <></> : <DropdownElement />}
    </div>
  )
}
