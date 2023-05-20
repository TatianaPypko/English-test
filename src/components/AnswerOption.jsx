import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function AnswerOption({ answers, correctAnswer, setCounter, counter, isReset, key }) {
  const [disabledIndex, setDisabledIndex] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(-1);

  useEffect(() => {
    setDisabledIndex([]);
    setClickedIndex(-1);
  }, [isReset, key]);

  function chooseOption(event, index) {
    if (event.target.value === correctAnswer) {
      setCounter(counter + 1);
    }
    setDisabledIndex(answers.map((elem, idx) => idx));
    setClickedIndex(index);
  }

  return (
    <div className="wrapper">
      {answers.map((elem, index) => (
        <input
          className={`button-answer ${clickedIndex === index ? "clicked" : ""}`}
          disabled={disabledIndex.includes(index)}
          type="submit"
          key={index}
          value={elem}
          onClick={(event) => chooseOption(event, index)}
        />
      ))}
    </div>
  );
}

AnswerOption.propTypes = {
  answers: PropTypes.array.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  setCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  isReset: PropTypes.bool.isRequired,
  key: PropTypes.string.isRequired,
};

export default AnswerOption;
