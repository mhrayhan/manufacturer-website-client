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
    <li><Link to='/'>Sign In</Link></li>
    <li><Link to='/'>Sigh Out</Link></li>
  </>
  return (
    <div class="navbar w-[90%] mx-auto bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navMenu}
            <li tabindex="0">
              <Link to='/'>
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </Link>
              <ul class="p-2">
                {navSubMenu}
              </ul>
            </li>
          </ul>
        </div>
        <Link to='/' class="btn btn-ghost normal-case text-xl w-48"><img src={logo} alt="" /></Link>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {navMenu}
          <li tabindex="0">
            <Link to='/'>
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul class="p-2">
              {navSubMenu}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;