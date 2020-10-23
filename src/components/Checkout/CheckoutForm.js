import React from 'react'
import { useForm } from 'react-hook-form';

function CheckoutForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"))

    return (
      
              <form onSubmit={handleSubmit(onSubmit)}>
<div className="form-group">
<input name="delivertodoor" className="form-control" ref={register({ required: true })} />
    
    {errors.delivertodoor && <span>Delivery To Door is required</span>}
</div>
<div className="form-group">
<input name="roadno" className="form-control" ref={register({ required: true })} />
    
    {errors.roadno && <span>Road No. is required</span>}
</div>
<div className="form-group">
<input name="flat" className="form-control" ref={register({ required: true })} />
    
    {errors.flat && <span>Flat,Suide or Floor is required</span>}
</div>
<div className="form-group">
<input name="businessname" className="form-control" ref={register({ required: true })} />
    
    {errors.businessname && <span>Business Name is required</span>}
</div>
<div className="form-group">
<textarea name="address" className="form-control"  rows="3" ref={register({ required: true })} ></textarea>

    
    {errors.address && <span>Address  is required</span>}
</div>
 
      
    <button className="btn btn-danger btn-block" type="submit">Save & Continue</button>
    </form>
      
    )
}

export default CheckoutForm
