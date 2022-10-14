import React from "react";
import { Link } from "react-router-dom";

export default function DropdownElement() {
  return (
    <div>
      <ol className="dropdown-container">
        <a className="dropdown-item">
        <Link to="/home">Home</Link>
        </a>
        <a className="dropdown-item">
        <Link to="/about">About</Link>
        </a>
        <a className="dropdown-item">
        <Link to="/contact">Contact</Link>
        </a>
      </ol>
    </div>
  )
}
