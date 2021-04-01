import Button from "components/Button";
import CourseHeader from "components/CourseHeader";
import Head from "next/head";
import Link from "next/link";
import Content from "./Content";
import styles from "./styles/LessonLayout.module.css";

const LessonLayout = ({ children, title, course, nextLesson }) => {
  const nextLessonUrl = nextLesson
    ? `/my/courses/${course.slug}/${nextLesson.slug}`
    : `/my/courses/${course.slug}/complete`;
  return (
    <div>
      <Head>
        <title>Volta Academy: {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CourseHeader course={course} />
      <Content>{children}</Content>
      <div className={styles.buttonContainer}>
        <Link href={nextLessonUrl}>
          <Button>Complete lesson</Button>
        </Link>
      </div>
    </div>
  );
};

export default LessonLayout;
