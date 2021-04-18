import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step2 = (props) => {
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./result");
  };
  const GoBack = (data) => {
    actions.updateAction(data);
    props.history.push("./");
  };

  return (
    <form>
      <h2>Etape 2 : ajouter un ou plusieurs produits </h2>
      <label>
        produit 1 :
        <input {...register("product_1")} defaultValue={state.product_1} />
      </label>
      <label>
        produit 2 :
        <input {...register("product_2")} defaultValue={state.product_2} />
      </label>
      <button onClick={handleSubmit(onSubmit)}>NEXT</button>
      <button onClick={handleSubmit(GoBack)}>Go Back</button>
    </form>
  );
};

export default withRouter(Step2);
