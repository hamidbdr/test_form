import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step3 = (props) => {
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
        produit 3 :
        <input {...register("product_3")} defaultValue={state.product_3} />
      </label>
      <label>
        produit 4 :
        <input {...register("product_4")} defaultValue={state.product_4} />
      </label>
      <button onClick={handleSubmit(onSubmit)}>NEXT</button>
      <button onClick={handleSubmit(GoBack)}>Go Back</button>
    </form>
  );
};

export default withRouter(Step3);
