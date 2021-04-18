import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./step2");
  };

  return (
    <form>
      <h2>Etape 1 : Rechercher un patient ou ajouter un nouveau</h2>
      <label>
        Prenom:
        <input {...register("firstName")} defaultValue={state.firstName} />
      </label>
      <label>
        Nom:
        <input {...register("lastName")} defaultValue={state.lastName} />
      </label>
      <button onClick={handleSubmit(onSubmit)}>Suivant</button>
    </form>
  );
};

export default withRouter(Step1);
