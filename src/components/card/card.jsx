import styles from "./card.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Card = ({ card, onMoreClick, flip }) => {
  const onCountClick = () => {
    console.log("onCountClick!");
  };

  return (
    <div className={styles.cardPack}>
      <section
        className={`${styles.card} ${styles.front} ${getColors(card.theme)} ${
          flip ? styles.flip : styles.upflip
        }`}
      >
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={`${styles.date} ${getColors(card.theme)}`}>
              {card.date}
            </div>
            <button
              className={`${styles.more} ${getColors(card.theme)}`}
              onClick={() => onMoreClick(card.id)}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <div className={styles.tags}>
            {card.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className={` ${styles.tag} ${getColors(card.theme)}`}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.footer}>
          <button
            className={`${styles.count} ${getColors(card.theme)}`}
            onClick={onCountClick}
          >
            ❤{card.count}
          </button>
          <h4 className={`${styles.title} ${getColors(card.theme)}`}>
            {card.title}
          </h4>
        </div>
      </section>
      <section
        className={`${styles.card} ${styles.back} ${getColors(card.theme)} ${
          flip ? styles.flip : styles.upflip
        }`}
      >
        <h4>Back side✨</h4>
      </section>
    </div>
  );
};

function getColors(theme) {
  switch (theme) {
    case "skyblue":
      return styles.skyblue;
    case "blue":
      return styles.blue;
    case "black":
      return styles.black;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
