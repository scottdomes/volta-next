import styles from "./styles/CourseCard.module.css";
import Card from "../Card";
import Link from "next/link";

const CourseCard = (props) => {
  const { logo, price, title, description, progress, isOwned, link } = props;
  return (
    <Card className={styles.card}>
      <div className={styles.container}>
        <div className={styles.head}>
          {logo}
          <span className={styles.price}>${price}</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      {isOwned ? (
        <div>
          <h4>Progress: {progress}% complete</h4>
        </div>
      ) : (
        <div className={styles.footer}>
          <Link href={`/courses/${link}`}>
            <button className={styles.button}>Learn more</button>
          </Link>
        </div>
      )}
    </Card>
  );
};

export default CourseCard;
