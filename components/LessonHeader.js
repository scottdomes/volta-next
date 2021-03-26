import Link from "next/link";
import Container from "./layout/Container";
import Logo from "./Logo";
import styles from "./styles/Header.module.css";

const LessonHeader = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.inner}>
        <Logo />
        <div className={styles.linkContainer}>
          <Link href="/courses">Courses</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </Container>
    </div>
  );
};

export default LessonHeader;
