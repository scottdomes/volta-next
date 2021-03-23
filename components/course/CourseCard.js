import styles from "./styles/CourseCard.module.css";
import Card from "../Card";

const CourseCard = ({ logo, price, title, description, progress }) => {
  return (
    <Card className={styles.container}>
      <div className={styles.head}>
        {logo}
        <span className={styles.price}>${price}</span>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {progress > 0 && (
        <div>
          <h4>Progress: {progress}% complete</h4>
        </div>
      )}
    </Card>
  );
};

export default CourseCard;
