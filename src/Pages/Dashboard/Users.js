import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import UsersData from './UsersData';

const Users = () => {


  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://pure-falls-34835.herokuapp.com/user', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <Loader></Loader>
  }
  return (
    <div className='mt-6'>
      <h2 className='text-3xl text-secondary font-semibold mb-2'>All Users</h2>
      <div className=''>
        <div className="overflow-x-auto w-screen lg:w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => <UsersData
                  key={user._id}
                  index={index}
                  user={user}
                  refetch={refetch}
                ></UsersData>)
              }
            </tbody>
          </table>
        </div>
      </div >
    </div>
  );
};

export default Users;