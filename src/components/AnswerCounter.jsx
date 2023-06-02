import React from "react";
import PropTypes from "prop-types"

function AnswerCounter({ counter, showModal, setShowModal, onReset }) {
  let message;
  if (showModal) {
    switch (true) {
      case counter < 2:
        message = "You don't speak English.";
        break;
      case counter > 1 && counter < 4:
        message = "You can say and understand some words and phrases in English.";
        break;
      case counter > 4 && counter < 7:
        message = "You can communicate in 'simple' English and understand the interlocutor in a familiar situation, but with difficulty.";
        break;
      case counter > 7 && counter < 9:
        message = "You can speak and understand language by ear quite well. Express your thoughts in simple sentences but struggle with more complex grammatical structures and vocabulary.";
        break;
      default:
        message = "You speak English quickly and fully understand the language by ear.";
    }
    return (
      <div className="result-block">
        <div className="result">
          <h2>Your score is {counter} correct {counter === 1 ? "answer" : "answers"}</h2>
          <p>{message}</p>
          <button className="modal-close" onClick={() => {
            setShowModal(false);
            onReset();
          }}>Close</button>
        </div>
      </div>
    );
  }
  return null;
}


AnswerCounter.propTypes = {
      counter: PropTypes.number,
      showModal: PropTypes.bool.isRequired,
      setShowModal: PropTypes.func.isRequired,
      onReset: PropTypes.func.isRequired,
};

AnswerCounter.defaultProps = {
      counter: 0,
};

export default AnswerCounter;