import styles from "./styles/CourseCard.module.css";
import Card from "../Card";
import Link from "next/link";

const CourseCard = (props) => {
  const { logo, price, title, description, progress, isOwned, link } = props;
  return (
    <Card className={styles.card}>
      <Link href={`/courses/${link}`}>
        <div>
          <div className={styles.container}>
            <div className={styles.head}>
              {logo}
              {!isOwned && <span className={styles.price}>${price}</span>}
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
          {isOwned && (
            <div className={styles.footer}>
              <h4 className={styles.progress}>
                Progress: {progress}% complete
              </h4>
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
};

export default CourseCard;
