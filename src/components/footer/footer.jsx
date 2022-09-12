import styles from "./footer.module.css";
import React from "react";

const Footer = ({ instruction, selectedTitle }) => {
  const onEditClick = () => {
    console.log("Edit!");
  };
  const onDeleteClick = () => {
    console.log("Delete!");
  };
  const onCancelClick = () => {
    console.log("Cancel!");
  };
  return (
    <footer className={styles.footer}>
      {instruction === "options" && (
        <div className={styles.options}>
          <h4 className={styles.message}>You selected</h4>
          <h4 className={styles.title}>{selectedTitle}</h4>
          <h4 className={styles.message}>You wanna</h4>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={onEditClick}>
              Edit
            </button>
            <button className={styles.button} onClick={onDeleteClick}>
              Delete
            </button>
            <button className={styles.button} onClick={onCancelClick}>
              Cancel
            </button>
          </div>
          <h4 className={styles.message}>?</h4>
        </div>
      )}
    </footer>
  );
};

export default Footer;
