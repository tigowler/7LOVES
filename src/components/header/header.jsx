import styles from "./header.module.css";
import React from "react";

const Header = ({ onLogout, userName }) => (
  <header>
    {userName && <h4>{userName}</h4>}
    {onLogout && <button onClick={onLogout}>Logout</button>}
  </header>
);

export default Header;
