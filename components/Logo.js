import styles from "./styles/Logo.module.css";

const Logo = () => {
  return (
    <h1 className={styles.text}>
      <span className={styles.gradient}>Volta Academy</span>
    </h1>
  );
};

export default Logo;
