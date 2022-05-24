import useProducts from '../../hooks/useProducts';
import Tool from './Tool';

const ToolsPart = () => {
  const [tools] = useProducts();

  const toolItem = [...tools];
  const reverseTools = toolItem.reverse();

  return (
    <div className='grid lg:grid-cols-3 gap-5 w-[90%] mx-auto mt-12 lg:mt-32'>
      {
        reverseTools.splice(0, 3).map(tool => <Tool
          key={tool._id}
          tool={tool}
        ></Tool>)
      }
    </div>
  );
};

export default ToolsPart;