import React from "react";

const Questionnaire = ({
  answered,
  showAnswers,
  handleAnswer,
  data: { correct_answer, answers },
}) => {
  return (
    <>
      <>
        {answers.map((answer, idx) => {
          const bgColor = showAnswers
            ? answer === correct_answer
              ? "green-button"
              : "red-button"
            : null;

          return (
            <button
              type="button"
              variant="contained"
              key={idx}
              className={`${bgColor} response-button`}
              onClick={ !answered ? () => handleAnswer(answer) : null}
              dangerouslySetInnerHTML={{ __html: atob(answer) }}
            />
          );
        })}
      </>
    </>
  );
};

export default Questionnaire;
