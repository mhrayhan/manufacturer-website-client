import React, { useEffect, useState } from 'react';
import ShopTools from './ShopTools';

const Shop = () => {
  const [shopTools, SetShopTools] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:5000/product';
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div className='grid lg:grid-cols-3 gap-5 w-[90%] mx-auto mt-12 lg:mt-32'>
      {
        shopTools.map(tool => <ShopTools
          key={tool._id}
          tool={tool}
        ></ShopTools>)
      }
    </div>
  );
};

export default Shop;