import styles from "./card.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Card = ({ card, onMoreClick, flip, onCancelClick }) => {
  const onCountClick = () => {
    console.log("onCountClick!");
  };

  return (
    <div className={styles.cardPack}>
      <section
        className={`${styles.card} ${styles.front} ${
          flip ? styles.flip : styles.upflip
        }`}
      >
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.date}>{card.date}</div>
            <button
              className={styles.more}
              onClick={() => onMoreClick(card.id)}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <div className={styles.tags}>
            {card.tags.map((tag, index) => {
              return (
                <div key={index} className={styles.tag}>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.count} onClick={onCountClick}>
            ❤{card.count}
          </button>
          <h4 className={styles.title}>{card.title}</h4>
        </div>
      </section>
      <section
        className={`${styles.card} ${styles.back} ${
          flip ? styles.flip : styles.upflip
        }`}
      >
        <div className={styles.buttons}>
          <button className={styles.button}>Edit</button>
          <button className={styles.button}>Delete</button>
          <button
            className={styles.button}
            onClick={() => {
              onCancelClick();
            }}
          >
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;
