import useProducts from '../../hooks/useProducts';
import Tool from './Tool';

const ToolsPart = () => {
  const [tools] = useProducts();

  const toolItem = [...tools];
  const reverseTools = toolItem.reverse();

  return (
    <div className='lg:mt-32'>
      <h2 className='  mb- text-4xl font-medium bg-base-100 text-green-500 shadow-sm w-fit mx-auto py-4 px-8 mt- rounded-full'>Latest
        <span className='text-secondary'> Tools</span> </h2>

      <div className='grid lg:grid-cols-3 gap-5 w-[90%] mx-auto mt-8'>
        {
          reverseTools.splice(0, 3).map(tool => <Tool
            key={tool._id}
            tool={tool}
          ></Tool>)
        }
      </div>
    </div>
  );
};

export default ToolsPart;