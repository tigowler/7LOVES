import styles from "./card.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Card = ({ card, onMoreClick }) => {
  return (
    <div className={styles.cardPack}>
      <section className={`${styles.card} ${getColors(card.theme)}`}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={`${styles.date} ${getColors(card.theme)}`}>
              {card.date}
            </div>
            <button
              className={`${styles.more} ${getColors(card.theme)}`}
              onClick={onMoreClick("options", `${card.title}`)}
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
          <button className={`${styles.count} ${getColors(card.theme)}`}>
            ❤{card.count}
          </button>
          <h4 className={`${styles.title} ${getColors(card.theme)}`}>
            {card.title}
          </h4>
        </div>
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
