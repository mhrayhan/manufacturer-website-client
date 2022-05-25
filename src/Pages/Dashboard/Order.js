import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/purchase`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const matched = data.filter(item => item.userEmail === user?.email)
        console.log(matched);
        setOrders(matched)
      })
  }, [user])
  return (
    <div>
      <h2>My Order</h2>
      {
        // orders.map(order => )
      }
    </div>
  );
};

export default Order;