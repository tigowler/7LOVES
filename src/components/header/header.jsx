import styles from "./header.module.css";
import React from "react";

const Header = ({ onLogout }) => (
  <header>{onLogout && <button onClick={onLogout}>Logout</button>}</header>
);

export default Header;
