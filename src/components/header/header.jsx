import styles from "./header.module.css";
import React from "react";

const Header = ({ onLogout, userName }) => (
  <header className={styles.header}>
    {userName && <h4 className={styles.userName}>{userName}</h4>}
    {onLogout && (
      <button className={styles.button} onClick={onLogout}>
        Logout
      </button>
    )}
  </header>
);

export default Header;
