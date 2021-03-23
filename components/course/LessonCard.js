import styles from "./styles/LessonCard.module.css";
import Card from "../Card";
import Link from "next/link";
import ProgressCircle from "./ProgressCircle";

const LessonCard = ({ lesson }) => {
  return (
    <Card>
      <h4>
        Lesson {lesson.sequence}: {lesson.title}
      </h4>
      <ProgressCircle progress={lesson.progress} />
    </Card>
  );
};

export default LessonCard;
