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


    const url = 'http://localhost:5000/review/'
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
    <div>
      <h2 style={{ borderRadius: '10px 10px 0 0' }} className='text-l font-semibold text-white py-[5px] px-4 bg-blue-500 w-84 mx-auto mt-16'>Please Share Your Experience with US</h2>
      <form onSubmit={handleSubmit} className='border bg-green-300 p-2  '>
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" readOnly name='name' value={user.displayName} className="input  input-sm w-full " />
        <label className="label">
          <span className="label-text">Ratings</span>
        </label>
        <input type="text" name='ratings' placeholder="Ratings within 1 to 5" className="input input-sm w-full " />
        <label className="label">
          <span className="label-text">Please type your opinion.</span>
        </label>
        <textarea name='review' className="textarea w-full " placeholder="Type Your Opion"></textarea>
        <input className='btn w-28 max-w-xs my-4 btn-secondary text-white' type="submit" value='Submit' />
      </form>
    </div>
  );
};

export default Review;