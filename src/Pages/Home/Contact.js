import React from 'react';
import styles from './Contact.css'

const Contact = () => {
  return (
    <div id='contact-backgroun' className='lg:py-28 py-12 px-4'>
      <h2 className='text-5xl mb-24 text-secondary font-semibold'>Get In Touch</h2>
      <form className='lg:w-2/4 w-full  mx-auto '>

        <div className='lg:flex lg:justify-between'>
          <div class="group lg:mr-10">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Name</label>
          </div>

          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Email</label>
          </div>
        </div>

        <div class="group lg:w-fit mx-auto">
          <textarea type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Message</label>
        </div>

        <button className='btn  btn-secondary font-bold text-white text-xl w-2/6'>Send</button>

      </form>
    </div>
  );
};

export default Contact;