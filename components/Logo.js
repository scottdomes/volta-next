import styles from "./styles/Logo.module.css";

const Logo = () => {
  return (
    <h1 className={styles.text}>
      <span className={styles.gradient}>
        Volta<span className={styles.academy}> Academy</span>
      </span>
    </h1>
  );
};

export default Logo;
