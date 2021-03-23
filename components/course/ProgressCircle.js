import styles from "./styles/ProgressCircle.module.css";

const FILLS = {
  empty: "empty",
  half: "half",
  full: "full",
};

const getFill = (progress) => {
  if (progress === 0) {
    return FILLS.empty;
  } else if (progress < 100) {
    return FILLS.half;
  }

  return FILLS.full;
};

const ProgressCircle = ({ progress }) => {
  const fill = getFill(progress);
  return <div className={`${styles.container} ${styles[fill]}`}></div>;
};

export default ProgressCircle;
