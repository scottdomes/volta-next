import styles from "./styles/Button.module.css";

const Button = (props) => {
  return (
    <button className={`${props.className} ${styles.container}`} {...props} />
  );
};

export default Button;
