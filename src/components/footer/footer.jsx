import styles from "./footer.module.css";
import React from "react";

const Footer = ({ instruction, selectedTitle }) => {
  return (
    <footer>
      {instruction === "options" && (
        <div>
          <h4>You selected</h4>
          <h4>{selectedTitle}.</h4>
          <h4>You wanna</h4>
          <button>Edit</button>
          <button>Delete</button>
          <button>Cancel</button>
          <h4>?</h4>
        </div>
      )}
    </footer>
  );
};

export default Footer;
