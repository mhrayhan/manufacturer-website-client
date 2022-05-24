import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchsePage = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data))
  }, [id])

  return (
    <div>
      <div>
        <div>
          <div class="card max-w-md mx-auto mt-12 bg-base-100 shadow-xl ">
            <figure class="">
              <img src={items.image} alt="Shoes" class="rounded-xl p-4 h-[250px]" />
            </figure>
            <div class="card-body  text-left ">
              <h2 class="text-left text-2xl">{items.name}</h2>
              <p>{(items.description)}</p>
              <h4 className='text-lg font-bold'>Price: ${items.price}</h4>
              <p className='text-l font-bold'>Quantity: {items.available}</p>
              <button class=" btn btn-secondary mt-4 w-32 text-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchsePage;