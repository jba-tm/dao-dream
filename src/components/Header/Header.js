import React from "react";
import styles from "./styles.module.scss";
import lng from "../../assets/icons/lang.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.left__logo}>DAO DREAM</div>
        <div className={styles.left__pages}>
          <ul className={styles.list}>
            <li>About</li>
            <li>Documents</li>
            <li>Audit</li>
            <ul className={styles.sublist}>
              <li>Instructions</li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.action}>
          <div></div>
        </div>
        <div className={styles.languages}>
          <div className={styles.languages__icon}>
            <img src={lng} alt="lang" />
          </div>
          <div className={styles.languages__text}>English</div>
        </div>
        <div className={styles.button}>
          <div>Enter App</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
