import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2'

const PurchsePage = () => {
  const [user] = useAuthState(auth);

  const [items, setItems] = useState([]);

  // console.log(items);
  const { id } = useParams();
  // console.log(items);
  useEffect(() => {
    const url = `https://pure-falls-34835.herokuapp.com/product/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data))
  }, [id])



  const handleSubmit = event => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    console.log(quantity, phone, address);


    // const orderQuantity = parseInt(quantity)
    // const minimumOrder = parseInt(items.minorder)
    // const availableQty = parseInt(items.available)

    if (quantity < items.minorder) {
      return Swal.fire(
        'Error',
        `Please Order more than ${items.minorder}`,
        'error'
      )
    }
    if (quantity > items.available) {
      return Swal.fire(
        'Error',
        `Please Order less than ${items.available}`,
        'error'
      )
    }

    const purchase = {
      toolId: items._id,
      itemName: items.name,
      image: items.image,
      price: items.price,
      order: quantity,
      userName: user.displayName,
      userEmail: user.email,
      phone: phone,
      address: address
    }

    const url = 'https://pure-falls-34835.herokuapp.com/purchase/'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(purchase)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire(
            'Order Placed',
            `Order Placed for ${items.name}`,
            'success'
          )
        }
      })
  }

  return (
    <div>
      <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl text-center font-semibold">Purchase</h2>
            <form onSubmit={handleSubmit}>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product</span>
                </label>
                <input type="text" readOnly name='itemName' value={items?.name}
                  className="input input-sm input-info  input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="number" readOnly name='price' value={items?.price}
                  className="input input-sm input-info  input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Order Quantity</span>
                </label>
                <input type="number" name='quantity' placeholder='Order Quantity' className="input input-sm input-info  input-bordered w-full max-w-xs" />
              </div>

              <div className='flex pt-4 '><span className='bg-green-500 text-white font-semi-bold px-2 p-[2px] rounded-md'>Stock: {items.available}</span><span className='bg-orange-600 text-white font-semi-bold px-2  p-[2px] rounded-md'>Minimum Order: {items.minorder}</span>
              </div>



              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" readOnly name='userName' value={user?.displayName}
                  className="input input-sm input-info  w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" readOnly name='userEmail' value={user?.email}
                  className="input input-sm input-info input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="number" name='phone' placeholder='Your Phone'
                  className="input input-sm input-info  input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="text" name='address' placeholder='Your Address'
                  className="input input-sm input-info  input-bordered w-full max-w-xs" />
              </div>

              <input className='btn w-full max-w-xs my-4 btn-outline btn-success' type="submit" value='Place order' />

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchsePage;