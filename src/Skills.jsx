import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#000000] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-purple-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>Essa é a lista de tecnologias que conheço</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#7d4299cb] hover:scale-110 duration-500'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#7d4299cb] hover:scale-110 duration-500'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#7d4299cb] hover:scale-110 duration-500'>
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#7d4299cb] hover:scale-110 duration-500'>
                  <p className='my-4'>React.js</p>
              </div>
              
            
          </div>
      </div>
    </div>
  );
};
export default Skills;