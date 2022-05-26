import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderList from './OrderList';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Order = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/purchase?userEmail=${email}`;
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
        const matched = data.filter(item => item.userEmail === email)
        console.log(matched);
        setItems(matched)
      })
  }, [user])


  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure?')
    if (proceed) {
      const url = `http://localhost:5000/purchase/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remaining = items.filter(item => item._id !== id);
          setItems(remaining)
        })
    }
  }

  return (
    <div>
      <OrderList></OrderList>
      <h2 className='text-l font-semibold text-white my-2 py-[5px] px-4 bg-slate-400 w-fit mx-auto rounded-lg'>My Order</h2>
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
              items.map((item, index) =>
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

export default Order;