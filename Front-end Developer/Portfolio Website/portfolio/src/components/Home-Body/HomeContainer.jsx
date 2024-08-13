import styles from "./HomeContainer.module.css";

import IntroContainer from "./IntroContainer";

const HomeContainer = () => {
  return (
    <div className={styles.Home}>
      <IntroContainer />
    </div>
  );
};
export default HomeContainer;
