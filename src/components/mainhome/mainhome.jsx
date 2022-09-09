import styles from "./mainhome.module.css";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";

const MainHome = ({ authService }) => {
  const navigate = useNavigate();
  const historyState = navigate?.location?.state;

  // state
  const [userId, setUserId] = useState(historyState && historyState.id);
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  // 로그인
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  });
  return (
    <>
      <Header onLogout={onLogout} />
    </>
  );
};

export default MainHome;
