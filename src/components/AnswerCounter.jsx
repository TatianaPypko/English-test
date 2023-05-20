import React from "react";
import PropTypes from "prop-types"

function AnswerCounter({ counter, showModal, setShowModal, onReset }) {

      if (showModal) {
            if (counter < 2) {
                  return <div className="result-block">
                        <div className="result">
                              <h2>Your score is {counter} correct answer</h2>
                              <p>You don't speak English.</p>
                              <button className="modal-close" onClick={() => {
                                    setShowModal(false);
                                    onReset();
                              }}>Close</button>
                        </div>
                  </div>
            } if (counter > 1 && counter < 4) {
                  return <div className="result-block">
                        <div className="result">
                              <h2>Your score is {counter} correct answers</h2>
                              <p>You can say and understand some words and phrases in English.</p>
                              <button className="modal-close" onClick={() => {
                                    setShowModal(false);
                                    onReset();
                              }}>Close</button>
                        </div>
                  </div>
            } if (counter > 4 && counter < 7) {
                  return <div className="result-block">
                        <div className="result">
                              <h2>Your score is {counter} correct answers</h2>
                              <p>You can communicate in "simple" English and understand the interlocutor in a familiar situation, but with difficulty.</p>
                              <button className="modal-close" onClick={() => {
                                    setShowModal(false);
                                    onReset();
                              }}>Close</button>
                        </div>
                  </div>
            } if (counter > 7 && counter < 9) {
                  return <div className="result-block">
                        <div className="result">
                              <h2>Your score is {counter} correct answers</h2>
                              <p>You can speak and understand language by ear quite well. Express your thoughts in simple sentences but struggle with more complex grammatical structures and vocabulary.</p>
                              <button className="modal-close" onClick={() => {
                                    setShowModal(false);
                                    onReset();
                              }}>Close</button>
                        </div>
                  </div>
            } else {
                  return <div className="result-block">
                        <div className="result">
                              <h2>Your score is {counter} correct answers</h2>
                              <p>You speak English quickly and fully understand the language by ear.</p>
                              <button className="modal-close" onClick={() => {
                                    setShowModal(false);
                                    onReset();
                              }}>Close</button>
                        </div>
                  </div>
            }
      }
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