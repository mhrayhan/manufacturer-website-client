import { useEffect, useState } from "react"

const useToken = user => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const email = user?.user?.email;
    const currentLogInUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentLogInUser)
      })
        .then(res => res.json())
        .then(data => {
          console.log('data inside user token', user);
          const accessToken = data.token;
          localStorage.setItem('accessToken', accessToken)
          setToken(accessToken)
        })
    }
  }, [user])
  return [token];
}

export default useToken;