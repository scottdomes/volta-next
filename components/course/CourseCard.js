import styles from "./styles/CourseCard.module.css";
import Card from "../Card";

const CourseCard = ({ logo, price, title, description, progress }) => {
  return (
    <Card>
      <div>
        {logo}
        <span>{price}</span>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      {progress > 0 && (
        <div>
          <h4>Progress: {progress}% complete</h4>
        </div>
      )}
    </Card>
  );
};

export default CourseCard;
