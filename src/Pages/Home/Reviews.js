import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:5000/review';
    fetch(url)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div className='bg-gray-100 mt-20 py-8 '>
      <h2 className='  mb-8 text-4xl font-medium bg-base-100 text-green-500 shadow-sm w-fit mx-auto py-4 px-8 mt- rounded-full' style={{}}><span className='text-secondary'>Customers</span> Says</h2>
      <div className='grid  lg:grid-cols-3 gap-5 w-5/6 mx-auto '>
        {
          reviews.map(review =>
            <div className="card w-full bg-base-100 shadow-sm">
              <div className="py-8 px-4 text-left">
                <h2 className="text-l">{review.name}</h2>
                <p className="">Ratings: <span className='text-orange-500'>{review.ratings} star</span>  </p>
                <p></p>
                <p><b className='text-green-500'>Comments:- </b> {review.review}</p>
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Reviews;