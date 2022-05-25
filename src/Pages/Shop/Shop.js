import React from 'react';
import useProducts from '../../hooks/useProducts';
import ShopTools from './ShopTools';

const Shop = () => {
  const [tools] = useProducts();
  return (
    <div className='grid lg:grid-cols-3 gap-5 w-[90%] mx-auto mt-12 lg:mt-32'>
      {
        tools.map(tool => <ShopTools
          key={tool._id}
          tool={tool}
        ></ShopTools>)
      }
    </div>
  );
};

export default Shop;