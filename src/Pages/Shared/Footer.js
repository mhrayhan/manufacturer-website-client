import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-base-200'>
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
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;