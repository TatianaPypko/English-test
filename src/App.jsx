import React, { useState } from "react";
import AnswerOption from "./components/AnswerOption";
import Question from "./components/Question";
import { questions } from "./Questions";
import AnswerCounter from "./components/AnswerCounter";
import Buttons from "./components/Buttons";
import "./style/styles.scss";

function App() {
  const [counter, setCounter] = useState(0);
  const [test, setTest] = useState(questions);
  const [resetKey, setResetKey] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onReset = () => {
    setTest((prevTest) =>
      prevTest.map((elem) => ({
        ...elem,
        isReset: true,
      }))
    );
    setCounter(0);
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <h1 className="title">English test</h1>
      <h2 className="task-title">Choose the correct answer</h2>
      <div className="container">
        {test.map((elem) => (
          <div key={elem.id}>
            <Question id={elem.id} question={elem.question} />
            <AnswerOption
              key={`${elem.id}-${resetKey}`}
              isReset={elem.isReset}
              counter={counter}
              setCounter={setCounter}
              id={elem.id}
              answers={elem.answers}
              correctAnswer={elem.correctAnswer}
            />
          </div>
        ))}
      </div>
      <Buttons onReset={onReset} setShowModal={setShowModal} />
      <AnswerCounter counter={counter} showModal={showModal} setShowModal={setShowModal} onReset={onReset} />
    </>
  );
}

export default App;
