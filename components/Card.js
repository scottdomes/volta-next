import styles from "./styles/Card.module.css";

const Card = ({ children, className }) => {
  return <div className={`${className} ${styles.container}`}>{children}</div>;
};

export default Card;
