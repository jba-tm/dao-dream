import React from "react";
import styles from "./styles.module.scss";

function HeaderWrapper(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}

export default HeaderWrapper;
