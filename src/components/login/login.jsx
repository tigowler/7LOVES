import styles from "./login.module.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMain = (userId, displayName) => {
    navigate("/home", { state: { id: userId, userName: displayName } });
  };
  const onLogin = (event) => {
    authService //
      .login(event.target.id)
      .then((data) => {
        goToMain(data.user.uid, data.user.displayName);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user.uid, user.displayName);
    });
  });
  return (
    <section className={styles.background}>
      <h1 className={styles.title}>7LOVES</h1>
      <section className={styles.card}>
        <div className={styles.subs}>
          <h4 className={styles.subtitle}>Do you wanna live</h4>
          <h4 className={styles.subtitle}>with LOVE?</h4>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button id="Google" onClick={onLogin} className={styles.button}>
              Login with Google
            </button>
          </li>
          <li className={styles.item}>
            <button id="Github" onClick={onLogin} className={styles.button}>
              Login with Github
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
