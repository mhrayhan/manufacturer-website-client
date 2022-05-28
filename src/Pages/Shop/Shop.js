import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import ShopTools from './ShopTools';

const Shop = () => {
  const [shopTools, SetShopTools] = useState([]);
  useEffect(() => {
    const url = 'https://pure-falls-34835.herokuapp.com/product';
    fetch(url)
      .then(res => res.json())
      .then(data => SetShopTools(data))
  }, [])
  return (
    <div>
      <h2 className='text-3xl py-4 font-serif  font-semibold text-secondary'>ALL TOOLS</h2>
      <div className='grid lg:grid-cols-3 gap-5 w-[90%] mx-auto mt-12 lg:mb-32'>
        {
          shopTools.map(tool => <ShopTools
            key={tool._id}
            tool={tool}
          ></ShopTools>)
        }

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;