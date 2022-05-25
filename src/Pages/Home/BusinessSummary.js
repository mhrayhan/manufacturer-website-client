import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faPeopleGroup, faProjectDiagram, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {
  return (
    <div className='bg-gradient-to-r from-violet-200 to-fuchsia-200 py-12 mb-2 mt-12'>
      <div className=' w-[90%] mx-auto '>
        <h2 className="text-5xl font-bold text-secondary">MILLIONS BUSINESS TRUST US</h2>
        <h3 className='text-2xl mt-2'>TRY TO UNDERSTAND USERS EXPECTATION</h3>
        <div className='grid lg:grid-cols-4 gap-8 gap-x-20 my-16'>
          <div className='bg-green-100 py-6 rounded-lg'>
            <FontAwesomeIcon className='text-6xl mb-8 text-secondary' icon={faFlag} />
            <h1 className='text-6xl font-bold'>45</h1>
            <p className='text-xl mt-4 text-secondary'>Countries</p>
          </div>
          <div className='bg-pink-100 py-6 rounded-lg'>
            <FontAwesomeIcon className='text-6xl mb-8 text-secondary' icon={faProjectDiagram} />
            <h1 className='text-6xl font-bold'>675</h1>
            <p className='text-xl mt-4 text-secondary'>Complete Project</p>
          </div>
          <div className='bg-blue-100 py-6 rounded-lg'>
            <FontAwesomeIcon className='text-6xl mb-8 text-secondary' icon={faPeopleGroup} />
            <h1 className='text-6xl font-bold'>401</h1>
            <p className='text-xl mt-4 text-secondary'>Happy Clients</p>
          </div>
          <div className='bg-yellow-100 py-6 rounded-lg'>
            <FontAwesomeIcon className='text-6xl mb-8 text-secondary' icon={faThumbsUp} />
            <h1 className='text-6xl font-bold'>666</h1>
            <p className='text-xl mt-4 text-secondary'>Feedbackes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;