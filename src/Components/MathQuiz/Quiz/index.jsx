import { useState } from "react";
import Answer from "../Answer";
import styles from "./styles.module.css";
function MathQuiz() {
  const [points, setPoints] = useState(0);

  const generateNumbers = () => ({
    a: Math.floor(Math.random() * 10),
    b: Math.floor(Math.random() * 10),
  });

  const [task, setTask] = useState(generateNumbers());

  const updatePoints = (userAnswer) => {
    const correct = task.a + task.b;

    if (Number(userAnswer) === correct) {
      setPoints((prev) => prev + 1);
    } else {
      setPoints((prev) => prev - 1);
    }

    setTask(generateNumbers());
  };

  return (
    <div className={styles.card}>
      <h2>Ваши очки: {points}</h2>

      <h1>
        {task.a} + {task.b} = ?
      </h1>

      <Answer updatePoints={updatePoints} />
    </div>
  );
}
export default MathQuiz;
