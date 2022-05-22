import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.webp'

const Navbar = () => {
  const navMenu = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/'>Reviews</Link></li>
    <li><Link to='/'>Contact</Link></li>
  </>
  const navSubMenu = <>
    <li className='bg-white'><button className='btn btn-secondary text-white px-6'>Sign Out</button></li>
  </>
  return (
    <div className=''>
      <div className="navbar shadow-md  bg-base-100">
        <div className="navbar-start lg:ml-24">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52">
              {navMenu}
              <li tabIndex="0">
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className=" ">
                  {navSubMenu}
                </ul>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl w-48"><img src={logo} alt="" /></Link>
        </div>
        <div className="navbar-end lg:mr-24 hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navMenu}
            <li tabIndex="0">
              <a>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="">
                {navSubMenu}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Navbar;