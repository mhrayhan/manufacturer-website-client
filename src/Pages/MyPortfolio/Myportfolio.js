import React from 'react';
import imgme from '../../assets/images/me.png'
import proj1 from '../../assets/images/fruitsNinja.jpg'
import proj2 from '../../assets/images/proj2.jpg'
import proj3 from '../../assets/images/proj3.jpg'


const Myportfolio = () => {
  return (
    <div className='lg:w-[90%] mx-auto'>
      <h2 className='text-3xl font-semibold text-red-900'>My Portfolio</h2>
      <div className='flex  lg:flex-row flex-col-reverse items-center justify-between'>
        <div className='lg:w-[60%] text-left'>
          <h2 className='text-5xl font-semibold text-red-800'>I'am Mozammel Hoque</h2>
          <p className='text-xl mt-4'>I am a MERN stack web developer from Feni, Bangladesh. . I  am looking for opportunities to further develop my skills.</p>
          <p className='text-xl mt-4'>Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack, I also have sound knowledge of Data Structures and Algorithms with great problem-solving capabilities.</p>
        </div>
        <div className='lg:w-[40%]  '>
          <img className='lg:ml-[50%] lg:w-[60%]' src={imgme} alt="" />
        </div>
      </div>
      <div className='mt-20'>
        <h2 className='text-4xl text-orange-500'>My Simple Projects</h2>
        <div className='grid lg:grid-cols-2 gap-16 pt-16 pb-20'>
          <div clssName='h-[500px]'>
            <a target='_blank' href="https://inventory-management-9f796.web.app/">
              <img clssName='h-[100%]' src={proj1} alt="" />
            </a>
          </div>
          <div clssName='h-[500px]'>
            <a target='_blank' href="https://trip-advisor-5c1fe.web.app/">
              <img clssName='h-[100%]' src={proj2} alt="" />
            </a>
          </div>
          <div clssName='h-[500px]'>
            <a target='_blank' href="https://ass09res.netlify.app/">
              <img clssName='h-[100%]' src={proj3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myportfolio;