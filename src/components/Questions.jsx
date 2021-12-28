import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PlayerInfos from "./PlayerInfos";
import logo from "../assets/images/logo-violet.png";
import Timer from "./Timer";
import UrlContext from "../Contexts/UrlContext";
import Questionnaire from "./Questionnaire";
import Ready from "./Ready";

const TIME_FOR_QUESTION = 20;
const TIME_FOR_SHOWING_ANSWERS = 5;

function Questions({ username, onFinish }) {
  const history = useHistory();
  const { url, setUrl } = useContext(UrlContext);
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [qInd, setQInd] = useState(0);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(TIME_FOR_QUESTION);
  const [life, setLife] = useState(3);
  const [answered, setAnswered] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [goodAnswer, setGoodAndwer] = useState(0);

  const endGame = () => {
    onFinish(score);
    history.push("/endgame");
  };

  const handleAnswer = (answer) => {
    // set the counter and index
    setTimeout(() => {
      const nextQuestionIndex = qInd + 1;

      if (nextQuestionIndex >= questions.length) {
        return endGame();
      }
      setAnswered(false);
      setQInd(nextQuestionIndex);
      setCounter(TIME_FOR_QUESTION);
      setShowAnswers(false);
    }, 5000);

    if (!showAnswers) {
      // Prevent double answers
      // set score and life if correct answer or not
      if (answer === questions[qInd].correct_answer && goodAnswer >= 2 && life != 3) {
        setScore(score + 100);
        setLife(life + 1);
        setGoodAndwer(0);
        setAnswered(true);
      } else if (answer === questions[qInd].correct_answer) {
        setScore(score + 100);
        setGoodAndwer(goodAnswer + 1);
        setAnswered(true);
      } else {
        setGoodAndwer(0)
        setLife(life - 1);
        setAnswered(true);
      }
      setCounter(TIME_FOR_SHOWING_ANSWERS);
      setShowAnswers(true);
    }
  };

  useEffect(() => {
    if (life === 0) {
      setTimeout(() => {
        endGame();
      }, TIME_FOR_SHOWING_ANSWERS * 1000);
    }
  }, [life]);

  function onTimeout() {
    handleAnswer("");
  }

  // fetching the api data
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const questions = data.results.map((question) => ({
            ...question,
            answers: [
              question.correct_answer,
              ...question.incorrect_answers,
            ].sort(() => Math.random() - 0.5),
          }));
          setQuestions(questions);
          setLoaded(true);
        });
    }, 3000);
  }, []);

  return (
    <div className="component-questions">
      <div className="home">
        <div id="logo">
          <div className="home-logo-help-container">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
        </div>
        <div className="questions-container">
          <div className="questions">
            {!loaded && <Ready setLoaded={setLoaded} />}
            {loaded && qInd < questions.length && (
              <div className="q-and-a-container">
                <div className="close-button-container">
                  <Timer
                    counter={counter}
                    setCounter={setCounter}
                    onTimeout={onTimeout}
                  />
                  <Link to="/home">
                    <CancelRoundedIcon sx={{ fontSize: 40 }} />
                  </Link>
                </div>
                <div className="num-questions">
                  Question {qInd + 1} / {questions.length}
                </div>

                <div className="container-questions-answers">
                  <h1
                    className="question"
                    dangerouslySetInnerHTML={{
                      __html: atob(questions[qInd].question),
                    }}
                  />

                  <div className="button-container">
                    <Questionnaire
                      data={questions[qInd]}
                      showAnswers={showAnswers}
                      handleAnswer={handleAnswer}
                      answered={answered}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <PlayerInfos username={username} score={score} life={life} />
    </div>
  );
}

export default Questions;
