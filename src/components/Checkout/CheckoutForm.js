import React from "react";
import { useForm } from "react-hook-form";

function CheckoutForm({setOrderdata}) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  setOrderdata(data)
  }

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          name="delivertodoor"
          className="form-control"
          ref={register({ required: true })}
placeholder="Deliver to Door"
        />

        {errors.delivertodoor && <span className="text-danger">Delivery To Door is required</span>}
      </div>
      <div className="form-group">
        <input
          name="roadno"
          className="form-control"
          ref={register({ required: true })}
placeholder="Road No."
        />

        {errors.roadno && <span className="text-danger">Road No. is required</span>}
      </div>
      <div className="form-group">
        <input
          name="flat"
          className="form-control"
          ref={register({ required: true })}
placeholder="Flat,Suite or Flooe"
        />

        {errors.flat && <span className="text-danger">Flat,Suide or Floor is required</span>}
      </div>
      <div className="form-group">
        <input
          name="businessname"
          className="form-control"
          ref={register({ required: true })}
placeholder="Business Name"
        />

        {errors.businessname && <span className="text-danger">Business Name is required</span>}
      </div>
      <div className="form-group">
        <textarea
          name="address"
          className="form-control"
          rows="3"
          ref={register({ required: true })}
          placeholder="Address"
        ></textarea>

        {errors.address && <span className="text-danger">Address is required</span>}
      </div>

      <button className="btn btn-danger btn-block" type="submit">
        Save & Continue
      </button>
    </form>
  );
}

export default CheckoutForm;
