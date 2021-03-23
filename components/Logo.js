import styles from "./styles/Logo.module.css";

const Logo = () => {
  console.log(styles)
  return <h1 className={styles.text}>Volta Academy!</h1>;
};

export default Logo;
