import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Result = (props) => {
  const { state } = useStateMachine(updateAction);

  const goBack = () => {
    props.history.push("./step2");
  };
  return (
    <>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={goBack}>goBack</button>
    </>
  );
};

export default Result;
