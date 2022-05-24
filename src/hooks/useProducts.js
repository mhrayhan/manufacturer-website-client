import { useEffect, useState } from "react";

const useProducts = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:5000/product';
    fetch(url)
      .then(res => res.json())
      .then(data => setTools(data))
  }, [])
  return [tools, setTools];
}

export default useProducts;