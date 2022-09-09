import styles from "./card.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const [cards, setCards] = useState({
    date: "20220901",
    title: "#Shanghai Dragons",
    tags: ["#e-sports", "#IZaYaKi", "#Fleta"],
    count: 52,
  });

  return (
    <section>
      <div className={styles.header}>
        <div className={styles.tag}>{cards.date}</div>
        <button className={styles.more}>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div className={styles.tags}>
        {cards.tags.map((tag, index) => {
          return (
            <div key={index} className={styles.tag}>
              {tag}
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        <div className={styles.tag}>❤{cards.count}</div>
        <h4 className={styles.title}>{cards.title}</h4>
      </div>
    </section>
  );
};

export default Card;
