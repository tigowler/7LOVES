import styles from "./mainhome.module.css";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../header/header";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../card/card";

const MainHome = ({ authService }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // state
  const [userId, setUserId] = useState(location.state && location.state.id);
  const [userName, setUserName] = useState(
    location.state && location.state.userName
  );
  const [cards, setCards] = useState([
    {
      id: 1,
      date: "20220901",
      title: "#Shanghai Dragons",
      tags: ["#e-sports", "#IZaYaKi", "#Fleta"],
      count: 52,
      theme: "skyblue",
      imageURL: "",
    },
    {
      id: 2,
      date: "20220901",
      title: "#Shanghai Dragons",
      tags: ["#e-sports", "#IZaYaKi", "#Fleta"],
      count: 52,
      theme: "blue",
      imageURL: "",
    },
    {
      id: 3,
      date: "20220901",
      title: "#Shanghai Dragons",
      tags: ["#e-sports", "#IZaYaKi", "#Fleta"],
      count: 52,
      theme: "black",
      imageURL: "",
    },
  ]);

  const [flip, setFlip] = useState(-1);

  const onMoreClick = (id) => {
    setFlip(() => {
      const newFlip = id;
      console.log(`flip id=${id}`);
      return newFlip;
    });
  };

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  // 로그인
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
        setUserName(user.displayName);
      } else {
        navigate("/");
      }
    });
  });
  return (
    <>
      <Header onLogout={onLogout} userName={userName} />
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            onMoreClick={onMoreClick}
            flip={flip === card.id ? true : false}
          />
        );
      })}
    </>
  );
};

export default MainHome;
