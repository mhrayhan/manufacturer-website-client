import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const ManageOrders = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const navigate = useNavigate();

  const [manageOrders, setmanageOrders] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const url = `https://pure-falls-34835.herokuapp.com/purchase?userEmail=${email}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        console.log('res', res);
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/')
        }
        return res.json()
      })
      .then(data => {
        setmanageOrders(data)
      })
  })


  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure?')
    if (proceed) {
      const url = `https://pure-falls-34835.herokuapp.com/purchase/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remaining = manageOrders.filter(item => item._id !== id);
          setmanageOrders(remaining)
        })
    }
  }

  return (
    <div>
      <h2 className='text-l font-semibold text-white my-2 py-[5px] px-4 bg-slate-400 w-fit mx-auto rounded-lg'>Manage All Orders</h2>
      <div class="overflow-x-auto w-screen lg:w-full">
        <table class="table w-full text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              manageOrders.map((item, index) =>
                <tr className='hover'>
                  <th>{index + 1}</th>
                  <td>{item.itemName}</td>
                  <td><img src={item.image} width={30} alt="" /></td>
                  <td>{item.price}</td>
                  <td>{item.order}</td>
                  <td><button className='btn btn-xs text-white btn-success'>Pay</button></td>
                  <td><button onClick={() => handleDelete(item._id)} className='btn btn-xs text-white bg-red-500 hover:bg-red-600 outline'>Cancel</button></td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;