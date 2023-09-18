import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Category.css";

import CategoryImg from "../img/category.svg"; 

const Category = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({type: "START_GAME", payload: category})
    dispatch({type: "REORDER_QUESTIONS"});
  }

  return (
    <div id="category">
      <h2>Pick a category</h2>
      <p>The questions are related to one of the languages below:</p>
      <div>
        {quizState.questions.map((question) => (
          <button 
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={CategoryImg} alt="Category" />
    </div>
  );
};

export default Category;