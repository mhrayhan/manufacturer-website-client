import React from 'react';
import Swal from 'sweetalert2';

const UsersData = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://pure-falls-34835.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          Swal.fire(
            'Failed',
            `Failed to make an admin`,
            'error'
          )
        }
        return res.json()
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire(
            'Success',
            `Successfully made an admin`,
            'success'
          )
        }
      })
  }
  return (
    <tr className='text-center'>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> : <button className='btn btn-xs bg-green-600 text-white'>admin</button>}</td>
    </tr>
  );
};

export default UsersData;