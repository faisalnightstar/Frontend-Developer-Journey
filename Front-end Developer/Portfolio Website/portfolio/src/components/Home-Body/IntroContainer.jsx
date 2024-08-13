import ButtonContainer from "./ButtonContainer";
import styles from "./IntroContainer.module.css";
import React from "react";
import TypedComponent from "./TypedComponent";

const IntroContainer = () => {
  return (
    <div className={styles["intro-container"]}>
      <div className={styles["leftSection"]}>
        Hi, my name is <span className={styles["text-3D"]}>Faisal</span>
        <div>
          and I am a <br /> <TypedComponent />
        </div>
        <span className={styles["button-span"]}>
          <ButtonContainer />
        </span>
      </div>
      <div className={styles["rightSection"]}>
        <img className={styles["image"]} src="../Media/bg.png" alt="Bg image" />
      </div>
    </div>
  );
};
export default IntroContainer;
