import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          <h2 className='text-5xl text-success'>Dashboard</h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-gray-100 overflow-y-auto w-80 text-base-content">
            <li><Link to='/dashboard/review'>Add a Review</Link></li>
            <li><Link to='/dashboard/order'>My Order</Link></li>
            <li><Link to='/dashboard/profile'>My Profile</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;