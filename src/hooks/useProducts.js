import { useEffect, useState } from "react";

const useProducts = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const url = 'https://pure-falls-34835.herokuapp.com/product';
    fetch(url)
      .then(res => res.json())
      .then(data => setTools(data))
  }, [])
  return [tools, setTools];
}

export default useProducts;