import { useState } from "react";
import Card from "./Card";
import styles from "./styles/Quizlet.module.css";

const Banner = ({ isCorrect, hasAnswered }) => {
  if (!hasAnswered) {
    return null;
  }

  if (isCorrect) {
    return (
      <div className={`${styles.banner} ${styles.correctBanner}`}>
        <p className={styles.bannerText}>Correct! 🎉</p>
      </div>
    );
  }

  return (
    <div className={`${styles.banner} ${styles.incorrectBanner}`}>
      <p className={styles.bannerText}>Try again!</p>
    </div>
  );
};

const Quizlet = ({ answers, id, indexOfCorrectAnswer, question }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsCorrect(selectedAnswerIndex === indexOfCorrectAnswer);
    setHasAnswered(true);
  };
  return (
    <Card className={styles.container}>
      <h4 className={styles.heading}>Knowledge check</h4>
      <h5 className={styles.question}>{question}</h5>
      <form className={styles.form} onSubmit={onSubmit}>
        {answers.map((answer, i) => {
          return (
            <div key={`${id}${i}`}>
              <input
                className={styles.input}
                type="radio"
                id={`${id}${i}`}
                onChange={() => {
                  setSelectedAnswerIndex(i);
                  setHasAnswered(false);
                }}
                checked={selectedAnswerIndex === i}
              />
              <label className={styles.label} htmlFor={`${id}${i}`}>
                {answer}
              </label>
            </div>
          );
        })}
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      <Banner isCorrect={isCorrect} hasAnswered={hasAnswered} />
    </Card>
  );
};

export default Quizlet;
