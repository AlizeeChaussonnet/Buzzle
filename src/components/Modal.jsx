import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 200 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="button-exit-rules">
            <div onClick={props.onClose} className="button-rules">
              <CancelRoundedIcon sx={{ fontSize: 25 }} />
            </div>
          </div>
          <div className="rules-container">
            <div className="text-rules-container">
              <h2 className="rules-title">How to Play ?</h2>
              <h3 className="choose-title">Stay alive</h3>
              <ul className="ul-list-rules">
                <li className="rules-theme">
                  You have to survive to a series of 40 questions.
                </li>
                <li className="rules-theme">
                  First of all, you will be asked to choose a theme and a
                  difficulty.
                </li>
                <li className="rules-theme">
                  You have 3 lifes at the start of the game.
                </li>
                <li className="rules-theme">
                  For each question, click on the correct answer before the
                  timer reaches 0.
                </li>
                <li className="rules-theme">
                  For each wrong answer, or if the timer reaches 0, you'll lose
                  a life. And for each strike of 5 good answers, you'll get a
                  life back.
                </li>
                <li className="rules-theme">
                  Once you have no life remaining the game is over.
                </li>
                <li className="rules-theme">Good Luck !</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
