import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const ToolsPart = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setTools(data))
  }, [])
  const toolItem = [...tools];
  const reverseTools = toolItem.reverse();
  return (
    <div className='grid lg:grid-cols-3 gap-5 w-[90%] mx-auto mt-12 lg:mt-32'>
      {
        reverseTools.splice(0, 3).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
      }
    </div>
  );
};

export default ToolsPart;