import React from 'react';

const ShopTools = () => {
  const { _id, name, image, description, price, minorder, available } = tool;
  return (
    <div>
      <div class="card bg-base-100 shadow-xl ">
        <figure class="">
          <img src={image} alt="Shoes" class="rounded-xl p-4 h-[250px]" />
        </figure>
        <div class="card-body  text-left ">
          <h2 class="text-left text-2xl">{name}</h2>
          <p>{(description.slice(0, 100))}</p>
          <h4 className='text-lg font-bold'>Price: ${price}</h4>
          <p className='text-l font-bold'>Available Quantity: {available}</p>
          <p className='text-l font-bold mb-8'>Minimum Order Quantity: {minorder}</p>
          <button onClick={() => handlePurchse(_id)} class=" btn btn-secondary text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShopTools;