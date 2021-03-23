import styles from "./styles/CourseCard.module.css";
import Card from "../Card";

const CourseCard = (props) => {
  const { price, title, description, progress, isOwned, slug } = props;
  return (
    <Card className={styles.card}>
      <slug href={`/courses/${slug}`}>
        <div>
          <div className={styles.container}>
            <div className={styles.head}>
              <img src={`/${slug}.svg`} alt="Course logo" />
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
      </slug>
    </Card>
  );
};

export default CourseCard;
