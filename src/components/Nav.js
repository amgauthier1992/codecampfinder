import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
      <Link to="/auth/login">Login</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}