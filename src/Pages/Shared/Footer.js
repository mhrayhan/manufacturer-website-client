import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-base-100'>
      <footer className="footer w-[90%] mx-auto p-10  text-base-content">
        <div>
          <span className="footer-title">CATEGORY</span>
          <Link to='/' className="link link-hover">Best Sale</Link>
          <Link to='/' className="link link-hover">Equipment</Link>
          <Link to='/' className="link link-hover">Home Page</Link>
          <Link to='/' className="link link-hover">New Arrival</Link>
          <Link to='/' className="link link-hover">Tools Cutter</Link>
        </div>
        <div>
          <span className="footer-title">NAVIGATION</span>
          <Link to='/' className="link link-hover">About us</Link>
          <Link to='/' className="link link-hover">Contact</Link>
          <Link to='/' className="link link-hover">Search</Link>
          <Link to='/' className="link link-hover">Blog</Link>
        </div>
        <div>
          <span className="footer-title">LINK</span>
          <Link to='/' className="link link-hover">Terms of use</Link>
          <Link to='/' className="link link-hover">Catalog</Link>
          <Link to='/' className="link link-hover">Privacy policy</Link>
          <Link to='/' className="link link-hover">Cookie policy</Link>
          <Link to='/' className="link link-hover">Shipping Info</Link>
        </div>
        <div>
          <span className="footer-title">STORE INFO</span>
          <Link to='/' className="link link-hover">Fiot Fashion Demo Store Demo Store USA</Link>
          <Link to='/' className="link link-hover">Call Us: 123-456-7898</Link>
          <Link to='/' className="link link-hover">Email Us: Support@Fiot.Com</Link>
          <Link to='/' className="link link-hover">Fax: 123456</Link>
        </div>
      </footer>
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Tools Cart Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;