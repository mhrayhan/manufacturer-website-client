import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          <h2 className='text-3xl shadow-sm font-bold py-[5px] px-20 rounded-full text-success'>Dashboard</h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul style={{ borderRadius: '0 30px 0 0' }} className="menu mt-2 p-4 bg-gray-100 overflow-y-auto w-80 text-base-content">
            <li><Link to='/dashboard'>My Profile</Link></li>
            <li><Link to='/dashboard/order'>My Order</Link></li>
            <li><Link to='/dashboard/review'>Add a Review</Link></li>
            {admin && <li><Link to='/dashboard/users'>All User</Link></li>}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;