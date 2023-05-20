import React from "react";
import PropTypes from 'prop-types'

function Question({ id, question }) {
  return (
      <h3 className="question">{`Question № ${id}. ${question}`}</h3>
  );
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired
}
export default Question;