import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo.webp'
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/login')
  };

  const navMenu = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/shop'>Tools</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    <li><Link to='/portfolio'>Portfolio</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    {user && <li><Link to='/dashboard'><span className='capitalize'>{user?.displayName}</span></Link></li>}
    <li>{user ? <button onClick={logout} className='btn btn-ghost'>Sign Out</button> : <Link to='/login'>Log in</Link>}</li>
  </>

  return (

    <div className="navbar lg:py-4 shadow-md bg-base-100 sticky top-0 z-50 mb-[5px]">
      <div className="navbar-start lg:ml-24">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navMenu}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl w-40 lg:w-60"><img src={logo} alt="" /></Link>
        <label tabIndex="1" htmlFor="my-drawer-2" className="btn ml-24 btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 border border-black rounded-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>

      <div className="navbar-end lg:mr-24 hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          {navMenu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;