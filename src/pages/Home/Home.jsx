import React from "react";
import styles from "./styles.module.scss";
import HeaderWrapper from "../../components/Wrapper/HeaderWrapper";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div>
      <header className={styles.header}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </header>
    </div>
  );
}

export default Home;
