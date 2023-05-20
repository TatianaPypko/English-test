import React from "react";
import PropTypes from "prop-types";
import AnswerCounter from "./AnswerCounter";

function Buttons({ onReset, setShowModal, showModal }) {
  return (
    <div className="result-buttons">
      <button className="result-buttons__item" onClick={() => setShowModal(true)}>Check</button>
      <button className="result-buttons__item" onClick={onReset}>Reset</button>
      <AnswerCounter showModal={showModal} setShowModal={setShowModal} onReset={onReset} />
    </div>
  );
}

Buttons.propTypes = {
  onReset: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default Buttons;