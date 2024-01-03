import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function ({ userAnswers }) {
  return (
    <div id="Summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer) => {
          return (
            <li>
              <h3>2</h3>
              <p className="question">question text</p>
              <p className="user-answer">user's answer</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}