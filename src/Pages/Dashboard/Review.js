import React from 'react';
import Swal from 'sweetalert2';

const Review = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const ratings = event.target.ratings.value;
    const review = event.target.review.value;
    console.log(ratings, review);
    const reviews = {
      ratings: ratings,
      review: review,
    }

    // if (quantity < items.minorder) {
    //   return Swal.fire(
    //     'Error',
    //     `Please Order more than ${items.minorder}`,
    //     'error'
    //   )
    // }
    // if (quantity > items.available) {
    //   return Swal.fire(
    //     'Error',
    //     `Please Order less than ${items.available}`,
    //     'error'
    //   )
    // }

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
            'Order Placed',
            `Order Placed for`,
            'success'
          )
        }
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='border p-2 rounded mt-16'>
        <label className="label">
          <span className="label-text">Ratings</span>
        </label>
        <input type="text" name='ratings' placeholder="Ratings within 1 to 5" class="input input-bordered input-sm w-full " />
        <label className="label">
          <span className="label-text">Please type your opinion.</span>
        </label>
        <textarea name='review' class="textarea w-full textarea-bordered" placeholder="Type Your Opion"></textarea>
        <input className='btn w-28 max-w-xs my-4 btn-outline btn-success' type="submit" value='Submit' />
      </form>
    </div>
  );
};

export default Review;