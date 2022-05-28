import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddTools = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

    const url = `https://pure-falls-34835.herokuapp.com/product`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          Swal.fire(
            'Tools Added',
            `Tools Added Name: ${data.name}`,
            'success'
          )
          reset()
        }
      })

  }
  return (
    <div>
      <div className='mt-4'>
        <div className='flex justify-center items-center'>
          <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl text-center font-semibold text-white rounded-2xl bg-purple-600 w-fit mx-auto py-2 px-4 ">Add Tools</h2>
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Product</span>
                  </label>
                  <input type="text" className="input input-sm input-info  input-bordered w-full max-w-xs" {...register("name")} required />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input type="text" className="input input-sm input-info  input-bordered w-full max-w-xs" {...register("image")} required />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input type="text" className="input input-sm input-info  input-bordered w-full max-w-xs" {...register("description")} required />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input type="number" className="input input-sm input-info  input-bordered w-full max-w-xs" {...register("price")} required />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input type="number" className="input input-sm input-info  input-bordered w-full max-w-xs" {...register("available")} required />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Minimum Order</span>
                  </label>
                  <input type="number" className="input input-sm input-info  input-bordered w-full max-w-xs" {...register("minorder")} required />
                </div>





                <input className='btn w-full max-w-xs mt-8 font-bold btn-outline btn-success ' type="submit" value='Add  Tools' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTools;