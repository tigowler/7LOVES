import styles from "./mainhome.module.css";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../header/header";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../card/card";
import Footer from "../footer/footer";

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
      date: "20220901",
      title: "#Shanghai Dragons",
      tags: ["#e-sports", "#IZaYaKi", "#Fleta"],
      count: 52,
      theme: "skyblue",
      imageURL: "",
    },
    {
      date: "20220901",
      title: "#Seoul Dynasty",
      tags: ["#e-sports", "#IZaYaKi", "#Fleta"],
      count: 52,
      theme: "blue",
      imageURL: "",
    },
    {
      date: "20220901",
      title: "#Shanghai Dragons!!",
      tags: ["#e-sports", "#IZaYaKi", "#Fleta"],
      count: 52,
      theme: "black",
      imageURL: "",
    },
  ]);
  const [makeFooters, setMakeFooters] = useState({
    instruction: "",
    title: "",
  });

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const onMoreClick = (instruction, title) => {
    setMakeFooters((makeFooters) => {
      const updated = { ...makeFooters };
      updated.instruction = instruction;
      updated.title = title;
      return updated;
    });
  };

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
        return <Card key={index} card={card} onMoreClick={onMoreClick} />;
      })}
      <Footer
        instruction={makeFooters.instruction}
        selectedTitle={makeFooters.title}
      />
    </>
  );
};

export default MainHome;
