import Quiz from "../img/quiz.svg";
import "./Welcome.css";

function Welcome() {
  return (
    <div id="welcome">
        <h2> Welcome!</h2>
        <p> Click on the button below to start </p>
        <button> Start </button>
        <img src={Quiz} alt="Start" />
    </div>    
  );
};

export default Welcome;