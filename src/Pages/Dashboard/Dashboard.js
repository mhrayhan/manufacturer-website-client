import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center ">
          <h2 className='text-5xl text-success'>Dashboard</h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 bg-gray-50 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li><Link to='/dashboard/review'>My Review</Link></li>
            <li><Link to='/dashboard/order'>My Order</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;