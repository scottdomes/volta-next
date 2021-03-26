import styles from "./styles/LessonCard.module.css";
import Card from "../Card";
import Link from "next/link";
import ProgressCircle from "./ProgressCircle";

const LessonCard = ({ lesson, courseSlug }) => {
  return (
    <a href={`${courseSlug}/${lesson.slug}`}>
      <Card className={styles.container}>
        <h4>
          Lesson {lesson.sequence}: {lesson.title}
        </h4>
        <ProgressCircle progress={lesson.progress} />
      </Card>
    </a>
  );
};

export default LessonCard;
