import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const Review = () => {

  const [user] = useAuthState(auth);

  const handleSubmit = event => {
    event.preventDefault();
    const ratings = event.target.ratings.value;
    const review = event.target.review.value;
    console.log(ratings, review);
    const reviews = {
      name: user.displayName,
      ratings: ratings,
      review: review,
    }


    const url = 'https://pure-falls-34835.herokuapp.com/review/'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviews)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            'Success',
            `Review Successfully Posted..`,
            'success'
          )
        }
      })
  }

  return (
    <div className='lg:w-2/4'>
      <h2 style={{ borderRadius: '10px 10px 0 0' }} className='text-xl font-semibold text-white py-[7px] px-4 bg-slate-500 w-84 mx-auto mt-8'>Add a Review</h2>
      <form onSubmit={handleSubmit} className='border bg-slate-300 lg:px-16 px-8 '>
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" readOnly name='name' value={user.displayName} className="input  input-md w-full " />
        <label className="label">
          <span className="label-text">Ratings</span>
        </label>
        <input type="text" name='ratings' placeholder="Ratings within 1 to 5" className="input input-md w-full " />
        <label className="label">
          <span className="label-text">Please type your opinion.</span>
        </label>
        <textarea name='review' className="textarea w-full h-32" placeholder="Type Your Opion"></textarea>
        <input className='btn w-28 max-w-xs my-4 btn-accent text-white' type="submit" value='Submit' />
      </form>
    </div>
  );
};

export default Review;