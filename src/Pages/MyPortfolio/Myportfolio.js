import React from 'react';
import imgme from '../../assets/images/me.png'
import proj1 from '../../assets/images/fruitsNinja.jpg'
import proj2 from '../../assets/images/proj2.jpg'
import proj3 from '../../assets/images/proj3.jpg'


const Myportfolio = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <h2 className='text-3xl font-semibold text-red-900'>My Portfolio</h2>
      <div className='flex items-center justify-between'>
        <div className='w-[60%] text-left'>
          <h2 className='text-5xl font-semibold text-red-800'>I'am Mozammel Hoque</h2>
          <p className='text-xl mt-4'>I am a MERN stack web developer from Feni, Bangladesh. . I  am looking for opportunities to further develop my skills.</p>
          <p className='text-xl mt-4'>Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack, I also have sound knowledge of Data Structures and Algorithms with great problem-solving capabilities.</p>
        </div>
        <div className='w-[40%]  '>
          <img className='ml-[50%] w-[60%]' src={imgme} alt="" />
        </div>
      </div>
      <div className='mt-20'>
        <h2 className='text-4xl text-orange-500'>My Simple Projects</h2>
        <div className='grid lg:grid-cols-2 gap-9 py-24'>
          <div clssName='h-[500px]'>
            <a href="https://inventory-management-9f796.web.app/">
              <img clssName='h-[100%]' src={proj1} alt="" />
            </a>
          </div>
          <div clssName='h-[500px]'>
            <a href="https://trip-advisor-5c1fe.web.app/">
              <img clssName='h-[100%]' src={proj2} alt="" />
            </a>
          </div>
          <div clssName='h-[500px]'>
            <a href="https://ass09res.netlify.app/">
              <img clssName='h-[100%]' src={proj3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myportfolio;