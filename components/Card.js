import styles from "./styles/Card.module.css";

const Card = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Card;
