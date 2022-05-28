import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Footer from '../Shared/Footer';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          <h2 className='text-2xl shadow-sm font-semibold py-[5px] px-20 rounded-full text-green-700'>Hey! <span className='capitalize text-pink-500'>"{user.displayName}"</span> Welcome To Your Dashboard</h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul style={{ borderRadius: '0 30px 0 0' }} className="menu mt-2 p-4 bg-gray-100 overflow-y-auto w-80 text-base-content">
            <li><Link to='/dashboard'>My Profile</Link></li>
            {!admin && <li><Link to='/dashboard/order'>My Order</Link></li>}
            {!admin && <li><Link to='/dashboard/review'>Add a Review</Link></li>}
            {admin && <li><Link to='/dashboard/allorders'>Manage All Orders</Link></li>}
            {admin && <li><Link to='/dashboard/addtools'>Add Tools</Link></li>}
            {admin && <li><Link to='/dashboard/users'>All User</Link></li>}
          </ul>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;