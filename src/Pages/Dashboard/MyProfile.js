import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>

      <div className="card w-96 bg-gray-100 shadow-md mt-12">
        <div className="card-body">
          <h4 className='text-md rounded-md font-semi-bold bg-pink-500 text-white w-fit py-[3px] mx-auto px-4 mb-8'>My Profile</h4>
          <div className="card-actions justify-center mb-8">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} referrerpolicy="no-referrer" alt='User_Image' />
              </div>
            </div>
          </div>
          <p>Name: {user?.displayName}</p>
          <p>Email: {user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;