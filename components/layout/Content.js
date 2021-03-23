import Container from "./Container";
import styles from "./styles/Content.module.css";

const Content = ({ children, className }) => {
  return (
    <div className={styles.content}>
      <Container className={className}>{children}</Container>
    </div>
  );
};

export default Content;
