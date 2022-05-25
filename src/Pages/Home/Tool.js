import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  console.log(tool);
  const { _id, name, image, description, price, minorder, available } = tool;

  const navigate = useNavigate();
  const handlePurchse = (id) => {
    navigate(`/purchase/${id}`)
  }
  return (
    <div>
      <div className="card bg-base-100 shadow-xl ">
        <figure className="">
          <img src={image} alt="Shoes" className="rounded-xl p-4 h-[250px]" />
        </figure>
        <div className="card-body  text-left ">
          <h2 className="text-left text-2xl">{name}</h2>
          <p>{(description.slice(0, 100))}</p>
          <h4 className='text-lg font-bold'>Price: ${price}</h4>
          <p className='text-l font-bold'>Available Quantity: {available}</p>
          <p className='text-l font-bold mb-8'>Minimum Order Quantity: {minorder}</p>
          <button onClick={() => handlePurchse(_id)} className=" btn btn-secondary text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;