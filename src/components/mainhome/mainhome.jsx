import styles from "./mainhome.module.css";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../header/header";
import { useLocation, useNavigate } from "react-router-dom";

const MainHome = ({ authService }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // state
  const [userId, setUserId] = useState(location.state && location.state.id);
  const [userName, setUserName] = useState(
    location.state && location.state.userName
  );

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
    </>
  );
};

export default MainHome;
