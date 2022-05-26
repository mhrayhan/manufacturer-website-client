import React from 'react';
import bannerImg from '../../assets/images/banner-image.png'
import './Home.css'


const Banner = () => {

  return (
    <div className=''>
      <div id='banner-background' className="hero py-20 " >
        <div className="hero-content w-[95%] p-0 justify-between flex-col lg:flex-row-reverse">
          <div>
            <img src={bannerImg} className="w-full rounded-lg" alt='' />
          </div>
          <div className='text-left lg:mt-0 mt-8'>
            <h4 className="text-2xl ">New In Stock Tools</h4>
            <h2 className="text-5xl font-bold py-4 text-secondary">Super Power Drills</h2>
            <h3 className='text-xl font-bold mb-4'>New Arrival 2022</h3>
            <button className="btn btn-accent text-white mt-12">Shop Now</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Banner;