import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='w-fit mx-auto mt-[15%]'>
      <div className='loader'><BallTriangle height="100"
        width="100"
        color='#00FF1F'></BallTriangle>
      </div>
    </div>
  );
};

export default Loader;