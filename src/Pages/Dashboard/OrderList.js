import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const OrderList = () => {
  // const [p, setP] = useState([])
  // console.log(p);
  // const [user] = useAuthState(auth);
  // useEffect(() => {
  //   const getMyProducts = async () => {
  //     const email = user?.email;
  //     const url = `http://localhost:5000/purchase?email=${email}`

  //     await fetch(url)
  //       .then(res => res.json())
  //       .then(data => setP(data))
  //   }
  //   getMyProducts()
  // }, [user]);
  return (
    <div>

    </div>

  );
};

export default OrderList;