import Link from "next/link";
import Container from "./layout/Container";
import Logo from "./Logo";
import styles from "./styles/CourseHeader.module.css";

const CourseHeader = ({ course }) => {
  const { title, progress, slug } = course;

  return (
    <div className={styles.container}>
      <Container className={styles.inner}>
        <div className={styles.logoContainer}>
          <img src={`/${slug}.svg`} alt="Course logo" className={styles.logo} />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <h3 className={styles.progress}>{progress}% complete</h3>
      </Container>
    </div>
  );
};

export default CourseHeader;
