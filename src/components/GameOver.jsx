import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./GameOver.css";

import WellDone from "../img/welldone.svg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Game over!</h2>
      <p>Score: { quizState.score } </p>
      <p>You got { quizState.score } out of { quizState.questions.length } {" "} questions right!</p>
      <img src={WellDone} alt="Game over" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Restart</button>
    </div>
  );
};

export default GameOver;