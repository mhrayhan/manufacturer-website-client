import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import UsersData from './UsersData';

const Users = () => {


  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <p>Loading...........</p>
  }
  return (
    <div>
      <h2 className='text-3xl text-secondary font-semibold'>All User{users.length}</h2>
      <div className='mt-8'>
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