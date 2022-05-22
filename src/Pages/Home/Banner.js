import React from 'react';
import bannerImg from '../../assets/images/banner-image.png'


const Banner = () => {
  //  bg-auto bg-10 bg-[url('/src/assets/images/background.jpg')]
  return (
    <div className='mt-8'>
      <div class="hero " >
        <div class="hero-content w-[95%] p-0 justify-between flex-col lg:flex-row-reverse">
          <div>
            <img src={bannerImg} class="w-full rounded-lg" alt='' />
          </div>
          <div className='text-left'>
            <h4 class="text-2xl ">New In Stock Tools</h4>
            <h2 class="text-5xl font-bold py-4 text-secondary">Super Power Drills</h2>
            <h3 className='text-xl font-bold mb-4'>New Arrival 2022</h3>
            <button class="btn btn-accent text-white">Shop Now</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Banner;